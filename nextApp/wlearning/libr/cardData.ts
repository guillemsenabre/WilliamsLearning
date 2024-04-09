import sql from "better-sqlite3";

import { CardData } from "@/types/interfaces";


const db = sql('data.db');

export function getCardData(filter?: string): CardData[] {

  // Select ALL rows in the database
  let sql = `SELECT * FROM data`

  // If a filter is provided, select only the row that matches it
  if (filter) {
    sql += `WHERE slug = ?`;
  }

  // sql will place `filter` instead of `?` as it is the placeholder
  const data = db.prepare(sql).all(filter) as CardData[];

  return data;
}