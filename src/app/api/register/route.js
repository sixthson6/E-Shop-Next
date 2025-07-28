import api from '@/lib/api';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const response = await api.post('/api/v1/auth/register', data);
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
