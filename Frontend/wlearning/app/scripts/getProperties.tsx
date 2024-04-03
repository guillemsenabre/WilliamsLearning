import { CardData } from "@/types/interfaces";

interface Props {
  data: CardData[];
  index: string;
}

export function getProperties({ data, index }: Props){

  // Search field that matches index n. "as FieldData" is used to cast the FieldData type
  return  data?.find(item => item.id == index) as CardData;
}