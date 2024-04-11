// Next & React components
import Image from "next/image";

// Styles
import styles from "@/styles/page.module.css"

// Components
import FieldMenu from "../components/fieldMenu";
import Card from "./card";

// Custom scripts
import BionicText from "../scripts/bionicText";

// Data structure and types
import { CardData } from "@/types/interfaces";
import { FieldMenuItem } from "@/types/interfaces";
import { CardDataitem } from "@/types/interfaces";


const FieldContainer: React.FC<CardData> = ({ field, description, field_mindmap_path, introduction, childs }) => {  
  
  const toFieldMenu: FieldMenuItem = {
      title: field,
      subtitle1: 'MINDMAP',
      subtitle2: 'DESCRIPTION',
      subtitle3: 'SUB FIELDS'
  }

  const toCard: CardDataitem = {
    field: childs 
  }

  // process text into Bionic text -> bold words' start
  const bionicDescription: string = BionicText(description);
  const bionicIntroduction: string = BionicText(introduction);
  
  // Extracting and separating sub field values in an array
  const subFieldsArray: string[] = childs.split(',');

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
        <h2 id="description"> Description </h2>
        <div className={styles.fieldSection}>
          <p dangerouslySetInnerHTML={{ __html: bionicIntroduction }} />
        </div>
        <h2 id="subFields"> Sub fields </h2>
        <div className={styles.grid}>
          {subFieldsArray.map((subField) => (
            <Card field = {subField}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FieldContainer;