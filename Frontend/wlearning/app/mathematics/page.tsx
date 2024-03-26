'use client';

import MainHeader from "@/app/components/header";
import FieldContainer from "@/app/containers/fieldContainer";
import { useSearchParams } from "next/navigation"
import cardData from "@/app/data/cardData.json"

interface FieldData {
  index?: string;
  field: string;
  description: string;
  link?: string;
}

const Maths: React.FC = () => {

  // getParams is old router.query
  const searchParams = useSearchParams()

  // Get query property "index" using non-null assertion operator "!".
  const index: string = searchParams.get('index')!;

  // Search field that matches index n. "as FieldData" is used to cast the FieldData type
  const mathData = cardData?.find(item => item.index == index) as FieldData;

  // Using optional chaining to retrieve data from mathData as it may be undefined (unlikely)
  const field = mathData?.field;
  const description = mathData?.description;

  return (
    <main>
      <MainHeader/>
      <FieldContainer field={field} description={description} />
    </main>
  );
}

export default Maths;