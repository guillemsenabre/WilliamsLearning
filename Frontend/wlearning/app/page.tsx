import styles from "@/styles/page.module.css"
import MainBodyContainer from "./containers/mainBodyContainer";
import MainHeader from "./components/header";

import { getCardData } from "@/lib/cardData"

interface CardData {
  index: string;
  field: string;
  description: string;
  link: string;
}

export default function Home() {

  const objData : CardData[] = getCardData();

  return (
    <main className={styles.main}>
      <MainHeader data = {objData}/>
      <MainBodyContainer data = {objData}/>
    </main>
  );
}
