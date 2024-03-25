'use client';

import MainHeader from "@/app/components/header";
import FieldContainer from "@/app/containers/fieldContainer";
import { useSearchParams } from "next/navigation"
import cardData from "@/app/data/cardData.json"

const Maths: React.FC = () => {

  const searchParams = useSearchParams()
  const index = searchParams.get('index')

  const mathData = cardData.find(item => item.index == index);

  return (
    <main>
      <MainHeader/>
      <FieldContainer/>
    </main>
  );
}

export default Maths;