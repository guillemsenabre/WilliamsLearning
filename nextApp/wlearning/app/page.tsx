import MainBodyContainer from "./containers/mainBodyContainer";
import MainHeader from "./components/header";
import PageFooter from "./components/pageFooter";

import { getCardData } from "@/libr/cardData"
import { CardData } from "@/types/interfaces";


export default function Home() {
  
  // Here we use type casting since we are sure that `getCardData()` will
  //return an array if no filter (slug) is provided and an object if it is.
  const objData = getCardData() as CardData[];

  return (
    <>
      <header>
        <MainHeader data = {objData}/>
      </header>
      <main>
        <MainBodyContainer data = {objData}/>
        <PageFooter/>
      </main>
    </>
  );
}
