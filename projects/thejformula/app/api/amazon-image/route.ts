import { NextRequest, NextResponse } from 'next/server';

// Cache for image URLs to avoid repeated fetches
const imageCache = new Map<string, string>();

export async function GET(request: NextRequest) {
  const asin = request.nextUrl.searchParams.get('asin');
  
  if (!asin) {
    return NextResponse.json({ error: 'ASIN required' }, { status: 400 });
  }

  // Check cache first
  if (imageCache.has(asin)) {
    return NextResponse.redirect(imageCache.get(asin)!);
  }

  try {
    // Fetch Amazon product page
    const response = await fetch(`https://www.amazon.com/dp/${asin}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
    });

    const html = await response.text();

    // Try to find the main product image URL
    // Amazon uses various patterns for main images
    const patterns = [
      /data-old-hires="([^"]+)"/,
      /data-a-dynamic-image="\{[^}]*&quot;(https:\/\/m\.media-amazon\.com\/images\/I\/[^&]+)&quot;/,
      /"hiRes":"([^"]+)"/,
      /"large":"([^"]+)"/,
      /id="landingImage"[^>]*src="([^"]+)"/,
      /class="a-dynamic-image"[^>]*src="([^"]+)"/,
    ];

    let imageUrl = '';
    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match && match[1]) {
        imageUrl = match[1].replace(/\\u002F/g, '/');
        break;
      }
    }

    if (imageUrl) {
      // Cache the result
      imageCache.set(asin, imageUrl);
      return NextResponse.redirect(imageUrl);
    }

    // Fallback: return a placeholder
    return NextResponse.redirect(`https://via.placeholder.com/300x300.png?text=${encodeURIComponent(asin)}`);
  } catch (error) {
    console.error('Error fetching Amazon image:', error);
    return NextResponse.redirect(`https://via.placeholder.com/300x300.png?text=Product`);
  }
}
