import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const authHeader = request.headers.get('authorization');
    
    const response = await fetch('https://tinytales.trendline.marketing/api/auth/verify-email', {
      method: 'POST',
      headers: {
        'Authorization': authHeader || '',
        'Accept': 'application/json'
      },
      body: formData
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json({ message: 'Network error' }, { status: 500 });
  }
}