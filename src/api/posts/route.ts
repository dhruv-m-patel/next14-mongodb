import { connectMongoDb } from '@/lib/db';
import Post, { IPost } from '@/lib/models/Post';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  await connectMongoDb();
  const body: IPost = await req.json();
  if (!body.title || !body.description) {
    return NextResponse.json(
      { message: 'Post cannot be created without title and description' },
      { status: 400 },
    );
  }

  const post = await Post.create(body);
  return NextResponse.json(
    { post, message: 'Your post has been created' },
    { status: 201 },
  );
}
