'use client';

import MainHeader from "@/app/components/header";
import FieldContainer from "@/app/containers/fieldContainer";
import { useSearchParams } from "next/navigation"
import cardData from "@/app/data/cardData.json"

const Maths: React.FC = () => {

  // getParams is old router.query
  const searchParams = useSearchParams()

  // Get query property "index"
  const index = searchParams.get('index')

  // search field that matches index n
  const mathData = cardData.find(item => item.index == index);

  return (
    <main>
      <MainHeader/>
      <FieldContainer/>
    </main>
  );
}

export default Maths;