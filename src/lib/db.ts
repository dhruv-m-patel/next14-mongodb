import { MongoClient, ServerApiVersion } from "mongodb";
import assert from "assert";

let mongoDb: MongoClient;

export default async function connectMongoDb() {
  if (mongoDb) {
    return mongoDb;
  }

  try {
    const mongoUri = process.env.MONGO_URI as string;
    assert(mongoUri, "MONGO_URI is not configured in your environment");
    mongoDb = new MongoClient(mongoUri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    await mongoDb.connect();
    await mongoDb.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await mongoDb.close();
  }
}

export { connectMongoDb };
