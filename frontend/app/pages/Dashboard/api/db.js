// pages/api/db.js
import { openDatabase } from '@/api/libs/util/db';

async function connectDatabase() {
  const db = await openDatabase();
  return db;
}

export default connectDatabase;
