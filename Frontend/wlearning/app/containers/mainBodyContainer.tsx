import styles from "@/styles/page.module.css"

import Card from "@/app/containers/card";

import { CardData } from "@/types/interfaces";


interface MainBodyContainerProps {
  data: CardData[];
}

const MainBodyContainer: React.FC<MainBodyContainerProps> = ({ data }) => {

  const cardData = data;

  return (
    <div className={styles.grid}>
      {cardData.map((card) => (
        <Card key={card.index} {...card} /> //NOTE - card.field is the identifier, then all props are unpacked.
      ))}
    </div>
  );
}

export default MainBodyContainer;

