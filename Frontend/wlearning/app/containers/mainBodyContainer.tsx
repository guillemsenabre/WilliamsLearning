import styles from "@/styles/page.module.css"
import Card from "@/app/components/card";
import cardData from "@/app/data/cardData.json"


const MainBodyContainer: React.FC = () => {
  return (
    <div className={styles.grid}>
      {cardData.map((card) => (
        <Card key={card.field} {...card} /> //NOTE - card.field is the identifier, then all props are unpacked.
      ))}
    </div>
  );
}

export default MainBodyContainer;

