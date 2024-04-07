// Next & React components
import Image from "next/image";
import { render } from "react-dom";

// Styles
import styles from "@/styles/page.module.css"

// Components
import FieldMenu from "../components/fieldMenu";

// Custom scripts
import BionicText from "../scripts/bionicText";

// Data structure and types
import { CardData } from "@/types/interfaces";
import { FieldMenuItem } from "@/types/interfaces";


const FieldContainer: React.FC<CardData> = ({ field, description, field_mindmap_path }) => {  
  
  const toFieldMenu: FieldMenuItem = {
      title: field,
      subtitle: 'Introduction',
  }

  // process text into Bionic text -> bold words' start
  const bionicDescription: string = BionicText(description);

  return (
    <div className={styles.fieldContainer}>
      <FieldMenu key={toFieldMenu.title} {...toFieldMenu}/>
      <div className={styles.fieldMain}>
        <h1 id="title">{ field }</h1>
        <div className={styles.fieldSection}>
          <p>
          <p dangerouslySetInnerHTML={{ __html: bionicDescription }} />
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