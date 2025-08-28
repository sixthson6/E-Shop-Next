
import api from '@/lib/api';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
  try {
    const data = await request.json();
    const response = await api.post('/api/v1/auth/login', data);

    const { accessToken, refreshToken } = response;

    await cookies().set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      path: '/',
    });

    return NextResponse.json({ accessToken });

  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 401 });
  }
}
