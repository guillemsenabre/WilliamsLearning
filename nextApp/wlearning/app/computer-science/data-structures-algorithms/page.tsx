// Custom Components imports
import MainHeader from "@/app/components/header";
import FieldContainer from "@/app/containers/fieldContainer";
import PageFooter from "@/app/components/pageFooter";

// Get data from sqlite3
import { getCardData } from "@/libr/cardData";

// Interface types & data structure
import { CardData } from "@/types/interfaces";


const DSA: React.FC<CardData> = () => {

  // identifier to extract physics data from sqlite3 database
  const slug: string | undefined = '/computer-science/data-structures-algorithms';

  // Here we use type casting since we are sure that `getCardData()` will
  //return an array if no filter (slug) is provided and an object if it is.
  //REVIEW - Notice that headers' data is called on every component --> NOT EFFICIENT
  const data = getCardData() as CardData[];
  const dsaData = getCardData(slug) as CardData;

  return (
    <>
      <header>
        <MainHeader data = { data }/>
      </header>
      <main>
        <FieldContainer key={dsaData.id} {...dsaData}/>
        <PageFooter/>
      </main>
    </>
  );
}

export default DSA;