import MainHeader from "@/app/components/header";
import FieldContainer from "@/app/containers/fieldContainer";

// Get data from sqlite3
import { getCardData } from "@/libr/cardData";

// Function to search correct field
import { getProperties } from "../scripts/getProperties";

// Interface types & data structure
import { CardData } from "@/types/interfaces";


const ComputerScience: React.FC<CardData> = () => {

  const index : string = '3';
  const data: CardData[] = getCardData();
  const computerScienceData : CardData = getProperties({ data, index});

  return (
    <>
      <header>
        <MainHeader data = { data }/>
      </header>
      <main>
        <FieldContainer key={computerScienceData.id} {...computerScienceData}/>
      </main>
    </>
  );
}

export default ComputerScience;