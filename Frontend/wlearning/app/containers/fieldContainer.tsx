import styles from "@/styles/page.module.css"
import FieldMenu from "../components/fieldMenu";

// Function to retrieve specific field data
import { getProperties } from "../scripts/getProperties";

// Data structure and types
import { CardData } from "@/types/interfaces";


const FieldContainer: React.FC<CardData> = ({ id, field, description, link }) => {  
  return (
    <div className={styles.fieldContainer}>
      <FieldMenu/>
      <div className={styles.fieldMain}>
        <h1>{ field }</h1>
        <div className={styles.fieldSection}>
          <h2>Introduction</h2>
          <p>
            { description }
          </p>
        </div>
      </div>
    </div>
  );
}

export default FieldContainer;