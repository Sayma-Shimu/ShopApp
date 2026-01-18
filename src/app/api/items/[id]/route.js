import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { dbConnect } from '@/lib/dbConnect';

// GET single item by ID
export async function GET(request, { params }) {
  try {
    const db = await dbConnect();
    const { id } = params;
    
    const item = await db.collection('items').findOne({
      _id: new ObjectId(id)
    });
    
    if (!item) {
      return NextResponse.json(
        { error: 'Item not found' },
        { status: 404 }
      );
    }
    
    // Serialize MongoDB document
    const serializedItem = {
      ...item,
      _id: item._id.toString(),
      createdAt: item.createdAt?.toISOString(),
      updatedAt: item.updatedAt?.toISOString()
    };
    
    return NextResponse.json(serializedItem);
  } catch (error) {
    console.error('Error fetching item:', error);
    return NextResponse.json(
      { error: 'Failed to fetch item' },
      { status: 500 }
    );
  }
}
