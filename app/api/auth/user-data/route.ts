import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    
    const response = await fetch('https://tinytales.trendline.marketing/api/auth/user-data', {
      headers: {
        'Authorization': authHeader || '',
        'Accept': 'application/json'
      }
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json({ message: 'Network error' }, { status: 500 });
  }
}