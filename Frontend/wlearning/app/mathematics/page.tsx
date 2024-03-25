'use client';

import MainHeader from "@/app/components/header";
import FieldContainer from "@/app/containers/fieldContainer";
import { useSearchParams } from "next/navigation"

const Maths: React.FC = () => {

  const searchParams = useSearchParams()
  const index = searchParams.get('index')

  console.log(index);

  return (
    <main>
      <MainHeader/>
      <FieldContainer/>
    </main>
  );
}

export default Maths;