import { connectMongoDb } from "@/lib/db";

export async function register() {
  await connectMongoDb();
}
