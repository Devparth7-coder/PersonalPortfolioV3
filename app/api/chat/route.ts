import { NextRequest, NextResponse } from 'next/server';
import { findSmartAIResponse } from '@/data/aiKnowledgeBase';
import { checkRateLimit } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const rateCheck = checkRateLimit(`chat_${ip}`, 15, 60000);
    
    if (!rateCheck.success) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. My neural circuits need a brief cooldown. Try again in 60 seconds!' },
        { status: 429 }
      );
    }

    const { query } = await req.json();
    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Invalid question query' }, { status: 400 });
    }

    const answer = findSmartAIResponse(query);
    await new Promise((resolve) => setTimeout(resolve, 300));

    return NextResponse.json({
      success: true,
      query,
      answer,
      timestamp: new Date().toISOString(),
      model: 'DevParth-Neural-RAG-v2026',
    });
  } catch (error) {
    console.error('❌ Chat API Error:', error);
    return NextResponse.json(
      { error: 'Neural processing error. Please try asking your question again.' },
      { status: 500 }
    );
  }
}
