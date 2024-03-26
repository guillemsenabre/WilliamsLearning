'use client';

import MainHeader from "@/app/components/header";
import FieldContainer from "@/app/containers/fieldContainer";
import { getProperties } from "../scripts/getProperties";

const Physics: React.FC = () => {

  // using getProperties method to retrieve fieldData
  const physicsData = getProperties();

  // Using optional chaining to retrieve data from mathData as it may be undefined (unlikely)
  const field = physicsData?.field;
  const description = physicsData?.description;

  return (
    <main>
      <MainHeader/>
      <FieldContainer field={field} description={description} />
    </main>
  );
}

export default Physics;