import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';
import { checkRateLimit } from '@/lib/rateLimit';
import { connectToDatabase } from '@/lib/db';
import Contact from '@/models/Contact';
import { sendContactNotification } from '@/services/emailService';
import { ContactMessage } from '@/types';

export const inMemoryMessages: ContactMessage[] = [];

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '127.0.0.1';
    
    const rateCheck = checkRateLimit(`contact_${ip}`, 3, 60000);
    if (!rateCheck.success) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait a minute before sending another message.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validationResult.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;
    const dateStr = new Date().toISOString();

    let savedId = `msg-${Date.now()}`;
    try {
      await connectToDatabase();
      if (global.mongooseCache?.conn) {
        const newContact = await Contact.create({
          name,
          email,
          subject,
          message,
          date: dateStr,
          status: 'unread',
          ip,
        });
        savedId = newContact._id.toString();
      } else {
        throw new Error('No active mongoose connection');
      }
    } catch (dbError) {
      inMemoryMessages.unshift({
        id: savedId,
        name,
        email,
        subject,
        message,
        date: dateStr,
        status: 'unread',
        ip,
      });
    }

    await sendContactNotification({ name, email, subject, message });

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received successfully! Dev Parth will get back to you shortly.',
        id: savedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Contact API Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your message.' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    if (global.mongooseCache?.conn) {
      const messages = await Contact.find().sort({ createdAt: -1 });
      return NextResponse.json({ success: true, messages });
    }
    return NextResponse.json({ success: true, messages: inMemoryMessages });
  } catch (error) {
    return NextResponse.json({ success: true, messages: inMemoryMessages });
  }
}
