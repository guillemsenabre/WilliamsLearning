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

// This function will run on the server-side before
//rendering the page. 
// Benefits:
// -> Server-side rendering (faster initial load times, specially for big datasets)
// -> Automatic parsing (although it's quite easy to do it manually)
// -> Caching: nextjs can cache this data (improves performance when displaying it on other views)

export async function getStaticProps() {
  const response = await fetch('/app/data/cardData.json') // Retrieve the data from the json file
  const cardData = await response.json() // parse the json file

  return {
    props: {
      cardData,
    },
  };
}

export default MainBodyContainer;

