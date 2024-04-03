import styles from "@/styles/page.module.css"
import Card from "@/app/containers/card";

interface CardData {
  index: string;
  field: string;
  description: string;
  link: string;
}

interface MainBodyContainerProps {
  data: CardData[];
}

const MainBodyContainer: React.FC<MainBodyContainerProps> = ({ data }) => {

  const cardData = data;

  console.log(cardData)
  return (
    <div className={styles.grid}>
      {cardData.map((card) => (
        <Card key={card.index} {...card} /> //NOTE - card.field is the identifier, then all props are unpacked.
      ))}
    </div>
  );
}

export default MainBodyContainer;

