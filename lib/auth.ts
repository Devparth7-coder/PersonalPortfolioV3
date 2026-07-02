import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_jwt_key_for_admin_panel_2026_devparth';

export interface AdminPayload {
  username: string;
  role: string;
  iat?: number;
  exp?: number;
}

export function signToken(payload: { username: string; role: string }): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): AdminPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AdminPayload;
  } catch (error) {
    return null;
  }
}

export function getAdminUserFromRequest(req: NextRequest): AdminPayload | null {
  const cookieHeader = req.headers.get('cookie') || '';
  const match = cookieHeader.match(/admin_token=([^;]+)/);
  if (match && match[1]) {
    return verifyToken(match[1]);
  }

  const authHeader = req.headers.get('authorization') || '';
  if (authHeader.startsWith('Bearer ')) {
    return verifyToken(authHeader.substring(7));
  }

  return null;
}
