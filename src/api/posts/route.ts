import { connectMongoDb } from '@/lib/db';
import Post, { IPost } from '@/models/Post';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  await connectMongoDb();
  const body: IPost = await req.json();
  if (!body.title || !body.description) {
    return NextResponse.json(
      { message: 'Product name is missing' },
      { status: 400 },
    );
  }

  const product = await Post.create(body);
  return NextResponse.json(
    { product, message: 'Your post has been created' },
    { status: 201 },
  );
}
