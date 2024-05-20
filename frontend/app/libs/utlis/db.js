// util/db.js
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export async function openDatabase() {
  return open({
    filename: '@/public/database.db',
    driver: sqlite3.Database,
  });
}
