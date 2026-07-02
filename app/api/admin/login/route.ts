import { NextRequest, NextResponse } from 'next/server';
import { adminLoginSchema } from '@/lib/validations';
import { signToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validationResult = adminLoginSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid login credentials', details: validationResult.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { username, password } = validationResult.data;
    const adminUser = process.env.ADMIN_USERNAME || 'admin';
    const adminPass = process.env.ADMIN_PASSWORD || 'admin123';

    if (username === adminUser && password === adminPass) {
      const token = signToken({ username, role: 'super_admin' });
      
      const response = NextResponse.json({
        success: true,
        message: 'Welcome back, Dev Parth! Access granted to command center.',
        user: { username, role: 'super_admin' },
      });

      response.cookies.set('admin_token', token, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      });

      return response;
    } else {
      return NextResponse.json(
        { error: 'Unauthorized: Incorrect username or password.' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('❌ Admin Login Error:', error);
    return NextResponse.json({ error: 'Server authentication failure.' }, { status: 500 });
  }
}
