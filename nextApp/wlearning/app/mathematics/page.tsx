import MainHeader from "@/app/components/header";
import FieldContainer from "@/app/containers/fieldContainer";
import PageFooter from "../components/pageFooter";

// Get data from sqlite3
import { getCardData } from "@/libr/cardData";

// Interface types & data structure
import { CardData } from "@/types/interfaces";


const Maths: React.FC<CardData> = () => {

  // identifier to extract mathematics data from sqlite3 database
  const slug: string | undefined = '/mathematics';

  // Here we use type casting since we are sure that `getCardData()` will
  //return an array if no filter (slug) is provided and an object if it is.
  const data = getCardData() as CardData[];
  const mathData = getCardData(slug) as CardData;

  return (
    <>
      <header>
        <MainHeader data = { data }/>
      </header>
      <main>
        <FieldContainer key={mathData.id} {...mathData}/>
        <PageFooter/>
      </main>
    </>
  );
}

export default Maths;