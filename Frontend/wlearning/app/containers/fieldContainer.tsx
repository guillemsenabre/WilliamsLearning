import styles from "@/styles/page.module.css"
import FieldMenu from "../components/fieldMenu";

// Data structure and types
import { CardData } from "@/types/interfaces";
import { FieldMenuItem } from "@/types/interfaces";


const FieldContainer: React.FC<CardData> = ({ id, field, description, link }) => {  
  
  const toFieldMenu: FieldMenuItem = {
      title: field,
      subtitle: 'Introduction',
  }

  return (
    <div className={styles.fieldContainer}>
      <FieldMenu key={toFieldMenu.title} {...toFieldMenu}/>
      <div className={styles.fieldMain}>
        <h1 id="title">{ field }</h1>
        <div className={styles.fieldSection}>
          <h2 id="subtitle">Introduction</h2>
          <p>
            { description }
          </p>
        </div>
      </div>
    </div>
  );
}

export default FieldContainer;