import { NextRequest, NextResponse } from "next/server";
import { getRequests, getNewRequests, markRequestsSeen, isDbConfigured } from "@/lib/db";

// Simple auth for checking requests
const AUTH_TOKEN = process.env.REQUESTS_AUTH_TOKEN || 'jane-requests-2026';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// GET all requests or just new ones
export async function GET(request: NextRequest) {
  // Check auth
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${AUTH_TOKEN}`) {
    return NextResponse.json(
      { error: 'Unauthorized' }, 
      { status: 401, headers: corsHeaders }
    );
  }

  if (!isDbConfigured()) {
    return NextResponse.json(
      { error: 'Database not configured', configured: false },
      { status: 503, headers: corsHeaders }
    );
  }

  try {
    const url = new URL(request.url);
    const newOnly = url.searchParams.get('new') === 'true';
    const limit = parseInt(url.searchParams.get('limit') || '50');

    const requests = newOnly 
      ? await getNewRequests()
      : await getRequests(limit);

    return NextResponse.json({
      success: true,
      count: requests.length,
      newCount: requests.filter(r => r.status === 'new').length,
      requests,
    }, { headers: corsHeaders });
  } catch (error) {
    console.error('[Requests API] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch requests' },
      { status: 500, headers: corsHeaders }
    );
  }
}

// PATCH - Mark requests as seen
export async function PATCH(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${AUTH_TOKEN}`) {
    return NextResponse.json(
      { error: 'Unauthorized' }, 
      { status: 401, headers: corsHeaders }
    );
  }

  if (!isDbConfigured()) {
    return NextResponse.json(
      { error: 'Database not configured' },
      { status: 503, headers: corsHeaders }
    );
  }

  try {
    const { ids } = await request.json();
    
    if (!ids || !Array.isArray(ids)) {
      return NextResponse.json(
        { error: 'ids array required' },
        { status: 400, headers: corsHeaders }
      );
    }

    const marked = await markRequestsSeen(ids);

    return NextResponse.json({
      success: true,
      marked,
    }, { headers: corsHeaders });
  } catch (error) {
    console.error('[Requests API] Error:', error);
    return NextResponse.json(
      { error: 'Failed to update requests' },
      { status: 500, headers: corsHeaders }
    );
  }
}
