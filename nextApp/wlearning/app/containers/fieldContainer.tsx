// Next & React components
import Image from "next/image";

// Styles
import styles from "@/styles/page.module.css"

// Components
import FieldMenu from "../components/fieldMenu";
import Card from "./card";

// Custom scripts
import BionicText from "../scripts/bionicText";
import { getChildsSlug } from "@/libr/cardData";

// Data structure and types
import { CardData } from "@/types/interfaces";
import { FieldMenuItem } from "@/types/interfaces";


const FieldContainer: React.FC<CardData> = ({ field, description, field_mindmap_path, introduction, childs }) => {  
  
  const toFieldMenu: FieldMenuItem = {
      title: field,
      subtitle1: 'MINDMAP',
      subtitle2: 'DESCRIPTION',
      subtitle3: 'SUB FIELDS'
  }

  // process text into Bionic text -> bold words' start
  const bionicDescription: string = BionicText(description);
  const bionicIntroduction: string = BionicText(introduction);
  
  // Extracting and separating sub field values in an array
  const subFieldsArray: string[] = childs ? childs.split(',') : [];
  
  // Create a function that takes childs array and returns another array with each childs' slug
  const childSlugsArray: string[] = getChildsSlug(subFieldsArray);

  return (
    <div className={styles.fieldContainer}>
      <FieldMenu key={toFieldMenu.title} {...toFieldMenu}/>
      <div className={styles.fieldMain}>
        <h1 id="title">{ field }</h1>
        <div className={styles.fieldSection}>
          <p dangerouslySetInnerHTML={{ __html: bionicDescription }} />
        </div>
        <h2 id="mindmap">MIND MAP</h2>
        <div className={styles.mindMapContainer}>
          <Image
            className={styles.fieldMainMM}
            src={`/fieldImages/${field_mindmap_path}`}
            alt="Mind map image"
            width={800}
            height={600}
          />
        </div>
        <h2 id="description"> DESCRIPTION </h2>
        <div className={styles.fieldSection}>
          <p dangerouslySetInnerHTML={{ __html: bionicIntroduction }} />
        </div>
        { subFieldsArray && (
          <>
            <h2 id="subFields"> SUB FIELDS </h2>
            <div className={styles.grid}>
              {subFieldsArray.map((subField, index) => (
                <Card 
                  key = {subField} 
                  field = {subField}
                  slug = {childSlugsArray[index] || ''}/>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default FieldContainer;