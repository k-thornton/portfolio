import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI as string;

interface Cached {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
}

declare global {
  var mongooseCache: Cached;
}

if (!global.mongooseCache) {
  global.mongooseCache = { conn: null, promise: null };
}

async function connectToDatabase(): Promise<mongoose.Connection> {
  if (global.mongooseCache.conn) {
    return global.mongooseCache.conn;
  }

  if (!global.mongooseCache.promise) {
    global.mongooseCache.promise = mongoose.connect(MONGO_URI).then((mongooseConnection) => {
      return mongooseConnection.connection;
    });
  }

  global.mongooseCache.conn = await global.mongooseCache.promise;
  return global.mongooseCache.conn;
}

export default connectToDatabase;
