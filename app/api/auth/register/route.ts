import { NextRequest, NextResponse } from 'next/server';

function formatErrorMessage(message: string): string {
  if (message.toLowerCase().includes('email') && message.toLowerCase().includes('taken')) {
    return 'This email address is already registered. Please use a different email or sign in to your existing account.';
  }
  if (message.toLowerCase().includes('username') && message.toLowerCase().includes('taken')) {
    return 'This username is already taken. Please choose a different username.';
  }
  if (message.toLowerCase().includes('password')) {
    return 'Password does not meet requirements. Please ensure it meets the specified criteria.';
  }
  return message;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const response = await fetch('https://tinytales.trendline.marketing/api/auth/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    });

    const data = await response.json();
    
    if (!response.ok && data.message) {
      data.message = formatErrorMessage(data.message);
    }
    
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Register API Error:', error);
    return NextResponse.json({ message: 'Service temporarily unavailable. Please try again later.' }, { status: 500 });
  }
}
