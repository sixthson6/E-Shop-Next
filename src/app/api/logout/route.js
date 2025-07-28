// src/app/api/logout/route.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    // Instruct the browser to clear the refresh token cookie
    cookies().set('refreshToken', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      path: '/',
      expires: new Date(0), // Set expiry date to the past
    });

    return NextResponse.json({ message: 'Logged out successfully' });

  } catch (error) {
    return NextResponse.json({ message: 'Logout failed' }, { status: 500 });
  }
}
