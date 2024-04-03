import MainHeader from "@/app/components/header";
import FieldContainer from "@/app/containers/fieldContainer";

// Get data from sqlite3
import { getCardData } from "@/libr/cardData";

// Function to search correct field
import { getProperties } from "../scripts/getProperties";

// Interface types & data structure
import { CardData } from "@/types/interfaces";


const Maths: React.FC<CardData> = () => {

  const index : string = '1';
  const data: CardData[] = getCardData();
  const mathData : CardData = getProperties({ data, index});

  return (
    <main>
      <MainHeader data = { data }/>
      <FieldContainer key={mathData.id} {...mathData}/>
    </main>
  );
}

export default Maths;