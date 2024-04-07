import Image from "next/image";

import styles from "@/styles/page.module.css"
import FieldMenu from "../components/fieldMenu";

// Data structure and types
import { CardData } from "@/types/interfaces";
import { FieldMenuItem } from "@/types/interfaces";


const FieldContainer: React.FC<CardData> = ({ field, description, field_mindmap_path }) => {  
  
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
          <p>
            { description }
          </p>
        </div>
        <div className={styles.mindMapContainer}>
          <Image
            className={styles.fieldMainMM}
            src={`/fieldImages/${field_mindmap_path}`}
            alt="Mind map image"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

export default FieldContainer;