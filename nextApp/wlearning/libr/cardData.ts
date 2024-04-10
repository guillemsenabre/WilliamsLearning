import sql from "better-sqlite3";

import { CardData } from "@/types/interfaces";


const db = sql('data.db');

export function getCardData(filter?: string): CardData[] | CardData {

  // Select ALL rows in the database
  let sqlQuery = `SELECT * FROM data`;

  console.log('QUERY BEFORE FILTER', sqlQuery);
  // If a filter is provided, select only the row that matches it
  if (filter) {
    sqlQuery += ` WHERE slug = ?`;
    return db.prepare(sqlQuery).get(filter) as CardData;
  }

  console.log('QUERY AFTER FILTER', sqlQuery);  

  // sql will place `filter` instead of `?` as it is the placeholder
  const data = db.prepare(sqlQuery).all() as CardData[];

  return data;
}