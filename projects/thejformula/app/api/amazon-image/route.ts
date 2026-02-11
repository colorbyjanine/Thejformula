import { NextRequest, NextResponse } from 'next/server';

// Known good image URLs for products that fail scraping
const knownImages: Record<string, string> = {
  // Olaplex products
  'B00SNM5US4': 'https://m.media-amazon.com/images/I/61dPlqQnWzL._SL1500_.jpg', // Olaplex No. 3
  'B0BTWR89FV': 'https://m.media-amazon.com/images/I/61NfL4qU2eL._SL1500_.jpg', // Olaplex No. 4D
  // Add more as needed
};

export async function GET(request: NextRequest) {
  const asin = request.nextUrl.searchParams.get('asin');
  
  if (!asin) {
    return NextResponse.json({ error: 'ASIN required' }, { status: 400 });
  }

  // Check known images first
  if (knownImages[asin]) {
    return NextResponse.redirect(knownImages[asin]);
  }

  // Try direct Amazon image URL pattern (works for many products)
  const directUrl = `https://images-na.ssl-images-amazon.com/images/P/${asin}.01._SCLZZZZZZZ_SX300_.jpg`;
  
  try {
    // Test if direct URL works
    const testResponse = await fetch(directUrl, { method: 'HEAD' });
    if (testResponse.ok) {
      return NextResponse.redirect(directUrl);
    }
  } catch {
    // Direct URL didn't work, try scraping
  }

  try {
    // Fetch Amazon product page
    const response = await fetch(`https://www.amazon.com/dp/${asin}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Cache-Control': 'no-cache',
      },
    });

    const html = await response.text();

    // Try to find the main product image URL
    const patterns = [
      /data-old-hires="([^"]+)"/,
      /"hiRes":"([^"]+)"/,
      /"large":"([^"]+)"/,
      /id="landingImage"[^>]*src="([^"]+)"/,
      /class="a-dynamic-image"[^>]*src="([^"]+)"/,
      /data-a-dynamic-image="[^"]*"(https:\/\/m\.media-amazon\.com\/images\/I\/[^"]+)"/,
      /(https:\/\/m\.media-amazon\.com\/images\/I\/[A-Za-z0-9\-\+]+\._[^"'\s]+\.jpg)/,
    ];

    let imageUrl = '';
    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match && match[1]) {
        imageUrl = match[1]
          .replace(/\\u002F/g, '/')
          .replace(/&amp;/g, '&');
        // Make sure it's a proper image URL
        if (imageUrl.includes('media-amazon.com') || imageUrl.includes('ssl-images-amazon')) {
          break;
        }
      }
    }

    if (imageUrl) {
      return NextResponse.redirect(imageUrl);
    }

    // Last fallback - try m.media-amazon.com pattern
    const fallbackUrl = `https://m.media-amazon.com/images/P/${asin}.01._SCLZZZZZZZ_SX300_.jpg`;
    return NextResponse.redirect(fallbackUrl);
    
  } catch (error) {
    console.error('Error fetching Amazon image:', error);
    // Return a nicer placeholder
    return NextResponse.redirect(`https://m.media-amazon.com/images/P/${asin}.01._SCLZZZZZZZ_SX300_.jpg`);
  }
}
