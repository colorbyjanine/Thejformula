#!/usr/bin/env python3
"""
Fetch Amazon product images and save them locally
"""

import requests
import json
import re
import os
import time
from pathlib import Path

# ASINs that need images (the ones with broken P format URLs)
BROKEN_ASINS = [
    'B0038NF8MG', 'B00UYBSZ52', 'B01LATG0X0', 'B06XNPXM53', 'B0797CG5R8',
    'B07M5X4D3P', 'B07YXC5C26', 'B082X7X2RD', 'B09CLRY9F1', 'B0B816Y7VX',
    'B0BS1M3NW2', 'B0BSV4285T', 'B0BZ8C6JM5', 'B0C5CKRWGR', 'B0C7WLJ5MP',
    'B0CF76VGD5', 'B0CGVBQ95D', 'B0CJD73LV6', 'B0CLV5X2LH', 'B0CZ384SXK',
    'B0D1VMFWYN', 'B0D2C73TLR', 'B0D46DGX6M', 'B0D8SDKSQJ', 'B0D97FQQDX',
    'B0DBTN139J', 'B0DDGXNQTY', 'B0DDXWTR5K', 'B0DFKFTJSV', 'B0DHLCYJMF',
    'B0DHSXW6VT', 'B0DHWD42YJ', 'B0DK9KYBBQ', 'B0DKDXYVY2', 'B0DLCC25XZ',
    'B0DM4HDG7K', 'B0DP3D8Q5P', 'B0DRJH535X', 'B0DSSDPFY5', 'B0DVVC8BSQ',
    'B0DWKD697N', 'B0DXBPBDH6', 'B0DXBYDK56', 'B0DYJS7G9X', 'B0DYNZ7611',
    'B0F5B746TS', 'B0F8HWPP54', 'B0FDQGY6Y5', 'B0FDXY4XS3', 'B0FFBSJ5S3',
    'B0FJVNQDFQ', 'B0FK4NZM2T', 'B0FKT96JLJ', 'B0FNBRCSQH', 'B0FNDQD8NR',
    'B0FP5CDV24', 'B0FR3PX9C7', 'B0G2M9ZMPP', 'B07H3GBSC3'
]

OUTPUT_DIR = Path(__file__).parent.parent / 'public' / 'products'

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate',
    'Connection': 'keep-alive',
}

def extract_image_url(html: str) -> str:
    """Extract the main product image URL from Amazon HTML"""
    patterns = [
        r'"hiRes":"(https://m\.media-amazon\.com/images/I/[^"]+)"',
        r'"large":"(https://m\.media-amazon\.com/images/I/[^"]+)"',
        r'data-old-hires="(https://m\.media-amazon\.com/images/I/[^"]+)"',
        r'id="landingImage"[^>]*src="(https://m\.media-amazon\.com/images/I/[^"]+)"',
    ]
    
    for pattern in patterns:
        match = re.search(pattern, html)
        if match:
            url = match.group(1)
            # Clean up the URL
            url = url.replace('\\u002F', '/')
            return url
    
    return None

def download_image(url: str, asin: str) -> bool:
    """Download an image and save it locally"""
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        if response.status_code == 200 and len(response.content) > 1000:
            filepath = OUTPUT_DIR / f'{asin}.jpg'
            with open(filepath, 'wb') as f:
                f.write(response.content)
            return True
    except Exception as e:
        print(f"  Error downloading: {e}")
    return False

def fetch_product_image(asin: str) -> bool:
    """Fetch product page and extract/download the main image"""
    url = f'https://www.amazon.com/dp/{asin}'
    
    try:
        response = requests.get(url, headers=HEADERS, timeout=15)
        if response.status_code != 200:
            print(f"  HTTP {response.status_code}")
            return False
        
        image_url = extract_image_url(response.text)
        if image_url:
            print(f"  Found: {image_url[:60]}...")
            return download_image(image_url, asin)
        else:
            print(f"  No image URL found in HTML")
            return False
            
    except Exception as e:
        print(f"  Error: {e}")
        return False

def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    results = {'success': [], 'failed': []}
    
    for i, asin in enumerate(BROKEN_ASINS):
        print(f"[{i+1}/{len(BROKEN_ASINS)}] {asin}...")
        
        # Check if we already have this image
        if (OUTPUT_DIR / f'{asin}.jpg').exists():
            print(f"  Already exists, skipping")
            results['success'].append(asin)
            continue
        
        if fetch_product_image(asin):
            results['success'].append(asin)
        else:
            results['failed'].append(asin)
        
        # Be nice to Amazon
        time.sleep(2)
    
    print(f"\n=== Results ===")
    print(f"Success: {len(results['success'])}")
    print(f"Failed: {len(results['failed'])}")
    if results['failed']:
        print(f"Failed ASINs: {', '.join(results['failed'])}")

if __name__ == '__main__':
    main()
