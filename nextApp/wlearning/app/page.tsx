import styles from "@/styles/page.module.css"
import MainBodyContainer from "./containers/mainBodyContainer";
import MainHeader from "./components/header";

import { getCardData } from "@/libr/cardData"
import { CardData } from "@/types/interfaces";


export default function Home() {

  const objData : CardData[] = getCardData();

  return (
    <>
      <header>
        <MainHeader data = {objData}/>
      </header>
      <main className={styles.main}>
        <MainBodyContainer data = {objData}/>
      </main>
    </>
  );
}
