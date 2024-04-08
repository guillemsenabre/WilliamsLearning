// Next & React components
import Image from "next/image";

// Styles
import styles from "@/styles/page.module.css"

// Components
import FieldMenu from "../components/fieldMenu";

// Custom scripts
import BionicText from "../scripts/bionicText";

// Data structure and types
import { CardData } from "@/types/interfaces";
import { FieldMenuItem } from "@/types/interfaces";


const FieldContainer: React.FC<CardData> = ({ field, introduction, field_mindmap_path }) => {  
  
  const toFieldMenu: FieldMenuItem = {
      title: field,
      subtitle1: 'Introduction',
      subtitle2: 'Mind Map'
  }

  // process text into Bionic text -> bold words' start
  const bionicDescription: string = BionicText(introduction);

  return (
    <div className={styles.fieldContainer}>
      <FieldMenu key={toFieldMenu.title} {...toFieldMenu}/>
      <div className={styles.fieldMain}>
        <h1 id="title">{ field }</h1>
        <div className={styles.fieldSection}>
          <p dangerouslySetInnerHTML={{ __html: bionicDescription }} />
        </div>
        <h2 id="mindmap">Mind Map</h2>
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