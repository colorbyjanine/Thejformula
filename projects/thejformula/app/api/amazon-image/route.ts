import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const asin = request.nextUrl.searchParams.get('asin');
  
  if (!asin) {
    return NextResponse.json({ error: 'ASIN required' }, { status: 400 });
  }

  // Try the P format URL which works for many products
  const pFormatUrl = `https://images-na.ssl-images-amazon.com/images/P/${asin}.01._SCLZZZZZZZ_.jpg`;
  
  try {
    const response = await fetch(pFormatUrl, { method: 'HEAD' });
    const contentLength = response.headers.get('content-length');
    
    // If content length > 5KB, it's likely a real image (not a tiny placeholder)
    if (response.ok && contentLength && parseInt(contentLength) > 5000) {
      return NextResponse.redirect(pFormatUrl);
    }
  } catch {
    // P format didn't work
  }

  // Return 404 to trigger the frontend fallback
  return new NextResponse(null, { status: 404 });
}
