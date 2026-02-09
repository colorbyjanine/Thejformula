import { Redis } from '@upstash/redis';

// Initialize Redis client - will use env vars automatically
// UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN
let redis: Redis | null = null;

function getRedis(): Redis {
  if (!redis) {
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      throw new Error('Redis not configured. Please set up Upstash Redis in Vercel Storage.');
    }
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
  }
  return redis;
}

export type WebsiteRequest = {
  id: string;
  type: 'chat' | 'booking' | 'contact' | 'canvasco';
  name: string;
  email?: string;
  phone?: string;
  message: string;
  source: string;
  timestamp: string;
  status: 'new' | 'seen' | 'contacted' | 'resolved';
};

const REQUESTS_KEY = 'website:requests';
const REQUESTS_LIST_KEY = 'website:requests:list';

// Add a new request
export async function addRequest(request: Omit<WebsiteRequest, 'id' | 'timestamp' | 'status'>): Promise<WebsiteRequest> {
  const db = getRedis();
  
  const fullRequest: WebsiteRequest = {
    ...request,
    id: `req_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
    timestamp: new Date().toISOString(),
    status: 'new',
  };

  // Store the request
  await db.hset(REQUESTS_KEY, { [fullRequest.id]: JSON.stringify(fullRequest) });
  
  // Add to list (for ordering)
  await db.lpush(REQUESTS_LIST_KEY, fullRequest.id);
  
  // Keep only last 500 requests
  await db.ltrim(REQUESTS_LIST_KEY, 0, 499);

  console.log(`[DB] New request saved: ${fullRequest.id} - ${fullRequest.type} from ${fullRequest.name}`);
  
  return fullRequest;
}

// Get all requests
export async function getRequests(limit = 50): Promise<WebsiteRequest[]> {
  const db = getRedis();
  
  // Get request IDs
  const ids = await db.lrange(REQUESTS_LIST_KEY, 0, limit - 1) as string[];
  
  if (!ids || ids.length === 0) {
    return [];
  }

  // Get all request data - hmget returns array
  const requestsData = await db.hmget<Record<string, string>>(REQUESTS_KEY, ...ids);
  
  const requests: WebsiteRequest[] = [];
  
  if (requestsData) {
    const values = Object.values(requestsData);
    for (const data of values) {
      if (data) {
        try {
          requests.push(JSON.parse(data));
        } catch (e) {
          console.error('[DB] Failed to parse request:', e);
        }
      }
    }
  }

  return requests;
}

// Get new (unread) requests
export async function getNewRequests(): Promise<WebsiteRequest[]> {
  const requests = await getRequests(100);
  return requests.filter(r => r.status === 'new');
}

// Update request status
export async function updateRequestStatus(id: string, status: WebsiteRequest['status']): Promise<boolean> {
  const db = getRedis();
  
  const data = await db.hget(REQUESTS_KEY, id);
  if (!data) return false;
  
  try {
    const request = JSON.parse(data as string) as WebsiteRequest;
    request.status = status;
    await db.hset(REQUESTS_KEY, { [id]: JSON.stringify(request) });
    return true;
  } catch (e) {
    console.error('[DB] Failed to update request:', e);
    return false;
  }
}

// Mark multiple requests as seen
export async function markRequestsSeen(ids: string[]): Promise<number> {
  let count = 0;
  for (const id of ids) {
    if (await updateRequestStatus(id, 'seen')) {
      count++;
    }
  }
  return count;
}

// Check if database is configured
export function isDbConfigured(): boolean {
  return !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}
