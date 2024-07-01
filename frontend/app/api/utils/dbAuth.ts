// pages/api/db.js
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

function openDatabase() {
  const db_path = '@/../public/database/database.db';
  return open({
    filename: db_path,
    driver: sqlite3.Database,
  });
}

export async function connectDatabase(sql_code: string) {
  const db = await openDatabase();
  const data = await db.all(sql_code);
  return { data };
}

export default connectDatabase;
