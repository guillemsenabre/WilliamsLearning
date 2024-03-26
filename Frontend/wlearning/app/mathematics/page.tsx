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


  // Get query property "index"
  const index: string | null = searchParams.get('index')

  // Handle missing index
  if (!index) {
    console.error('error: Index does not match any object')
    return null;
  }

  // Search field that matches index n
  const mathData: FieldData | undefined = cardData?.find(item => item.index == index)

  // Using optional chaining to retrieve data from mathData as it may be undefined (unlikely)
  const field = mathData?.field;
  const description = mathData?.description;

  return (
    <main>
      <MainHeader/>
      <FieldContainer/>
    </main>
  );
}

export default Maths;