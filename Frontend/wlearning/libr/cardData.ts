import sql from "better-sqlite3";

import { CardData } from "@/types/interfaces";


const db = sql('data.db');

export function getCardData() {
  const data = db.prepare('SELECT * FROM data').all() as CardData[];
  return data;
}