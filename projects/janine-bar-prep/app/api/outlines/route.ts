import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'outlines', 'index.json');
const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');

interface OutlineEntry {
  id: string;
  name: string;
  subject: string;
  week: string;
  uploadDate: string;
  size: number;
  type: string;
  path: string;
  content?: string;
  notes?: string;
}

interface OutlinesData {
  outlines: OutlineEntry[];
  subjects: string[];
}

async function getData(): Promise<OutlinesData> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { outlines: [], subjects: [] };
  }
}

async function saveData(data: OutlinesData): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

export async function GET() {
  const data = await getData();
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const subject = formData.get('subject') as string;
    const week = formData.get('week') as string;
    const notes = formData.get('notes') as string;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Ensure uploads directory exists
    await fs.mkdir(UPLOADS_DIR, { recursive: true });

    // Generate unique filename
    const timestamp = Date.now();
    const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = `${timestamp}_${safeName}`;
    const filePath = path.join(UPLOADS_DIR, filename);

    // Save file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await fs.writeFile(filePath, buffer);

    // Try to extract text content for processing
    let textContent = '';
    if (file.type === 'text/plain' || file.name.endsWith('.txt') || file.name.endsWith('.md')) {
      textContent = buffer.toString('utf-8');
    }

    // Create outline entry
    const outlineEntry: OutlineEntry = {
      id: timestamp.toString(),
      name: file.name,
      subject: subject || 'Other',
      week: week || new Date().toISOString().split('T')[0],
      uploadDate: new Date().toISOString(),
      size: file.size,
      type: file.type,
      path: `/uploads/${filename}`,
      content: textContent || undefined,
      notes: notes || undefined
    };

    // Update data
    const data = await getData();
    data.outlines.unshift(outlineEntry);
    await saveData(data);

    return NextResponse.json({ success: true, outline: outlineEntry });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    const data = await getData();
    
    const outlineIndex = data.outlines.findIndex(o => o.id === id);
    if (outlineIndex === -1) {
      return NextResponse.json({ error: 'Outline not found' }, { status: 404 });
    }

    const outline = data.outlines[outlineIndex];
    
    // Delete physical file
    try {
      const filePath = path.join(process.cwd(), 'public', outline.path);
      await fs.unlink(filePath);
    } catch {
      // File might not exist, continue anyway
    }

    // Remove from data
    data.outlines.splice(outlineIndex, 1);
    await saveData(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}
