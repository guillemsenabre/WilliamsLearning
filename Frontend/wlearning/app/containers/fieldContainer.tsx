import styles from "@/styles/page.module.css"
import FieldMenu from "../components/fieldMenu";

// Function to retrieve specific field data
import { getProperties } from "../scripts/getProperties";

// Data structure and types
import { CardData } from "@/types/interfaces";


interface FieldContainerProps {
  data: CardData[];
  index: number;
}

const FieldContainer: React.FC<FieldContainerProps> = ({ data, index }) => {

  const textData = data;
  
  return (
    <div className={styles.fieldContainer}>
      <FieldMenu/>
      <div className={styles.fieldMain}>
        <h1>Title1</h1>
        <div className={styles.fieldSection}>
          <h2>SubTitle1</h2>
          <p>
            This is a description of the Subtitle1
          </p>
        </div>
      </div>
    </div>
  );
}

export default FieldContainer;