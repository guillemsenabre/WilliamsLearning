'use client';

import { useSearchParams } from "next/navigation";
import cardData from "@/app/data/cardData.json"

interface FieldData {
  index?: string;
  field: string;
  description: string;
  link?: string;
}


export function getProperties() {
  // getParams is old router.query. Used to get index property
  const searchParams = useSearchParams();

  // Get query property "index" using non-null assertion operator "!".
  const index: string = searchParams.get('index')!;

  // Search field that matches index n. "as FieldData" is used to cast the FieldData type
  return  cardData?.find(item => item.index == index) as FieldData
}