import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/dbConnect';

// GET all items
export async function GET() {
  try {
    const db = await dbConnect();
    const items = await db.collection('items').find({}).sort({ createdAt: -1 }).toArray();
    
    // Serialize MongoDB documents
    const serializedItems = items.map(item => ({
      ...item,
      _id: item._id.toString(),
      createdAt: item.createdAt?.toISOString(),
      updatedAt: item.updatedAt?.toISOString()
    }));
    
    return NextResponse.json(serializedItems);
  } catch (error) {
    console.error('Error fetching items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch items' },
      { status: 500 }
    );
  }
}

// POST new item
export async function POST(request) {
  try {
    const db = await dbConnect();
    const body = await request.json();
    
    const newItem = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await db.collection('items').insertOne(newItem);
    
    return NextResponse.json(
      { ...newItem, _id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating item:', error);
    return NextResponse.json(
      { error: 'Failed to create item' },
      { status: 500 }
    );
  }
}
