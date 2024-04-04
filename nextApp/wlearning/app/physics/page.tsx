import MainHeader from "@/app/components/header";
import FieldContainer from "@/app/containers/fieldContainer";

// Get data from sqlite3
import { getCardData } from "@/libr/cardData";

// Function to search correct field
import { getProperties } from "../scripts/getProperties";

// Interface types & data structure
import { CardData } from "@/types/interfaces";


const Physics: React.FC = () => {

  const index : string = '2';
  const data: CardData[] = getCardData();
  const physicsData : CardData = getProperties({ data, index});

  return (
    <>
      <header>
        <MainHeader data = { data }/>
      </header>
      <main>
        <FieldContainer key={physicsData.id} {...physicsData}/>
      </main>
    </>
  );
}

export default Physics;