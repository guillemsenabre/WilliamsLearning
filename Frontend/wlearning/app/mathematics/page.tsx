'use client';

import MainHeader from "@/app/components/header";
import FieldContainer from "@/app/containers/fieldContainer";
import { getProperties } from "../scripts/getProperties";
import { Suspense } from "react";

const Maths: React.FC = () => {
  
  // using getProperties method to retrieve fieldData
  const mathData = getProperties();

  // Using optional chaining to retrieve data from mathData as it may be undefined (unlikely)
  const field = mathData?.field;
  const description = mathData?.description;

  return (
    <Suspense>
      <main>
        <MainHeader/>
        <FieldContainer field={field} description={description} />
      </main>
    </Suspense>
  );
}

export default Maths;