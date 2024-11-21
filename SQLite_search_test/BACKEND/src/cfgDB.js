import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function openDb() {
  return open({
    filename: "../test_database_chatgpt.sqlite",
    driver: sqlite3.Database,
  });
}

export default openDb;
