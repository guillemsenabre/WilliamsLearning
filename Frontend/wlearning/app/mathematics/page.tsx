import MainHeader from "@/app/components/header";
import FieldContainer from "@/app/containers/fieldContainer";

// Get data from sqlite3
import { getCardData } from "@/libr/cardData";

// Interface types & data structure
import { CardData } from "@/types/interfaces";


const Maths: React.FC<CardData> = () => {

  const data: CardData[] = getCardData();
  
  return (
    <main>
      <MainHeader data = { data }/>
      <FieldContainer data = { data }/>
    </main>
  );
}

export default Maths;