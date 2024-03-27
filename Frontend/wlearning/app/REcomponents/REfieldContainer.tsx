/*

import styles from "@/styles/page.module.css"
import FieldMenu from "../components/fieldMenu";
import { useState } from "react";

interface DynamicProps {
  field: string,
  description: string
}

const FieldContainer: React.FC<DynamicProps> = ({ field, description }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(description);


  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpdatedDescription(event.target.value);
  }

  return (
    <div className={styles.fieldContainer}>
      <FieldMenu/>
      <div className={styles.fieldMain}>
        <h1>{ field }</h1>
        <div className={styles.fieldSection}>
          <div className={styles.editBtn}>
            <button
            onClick={handleEditToggle}
            >
              {editMode ? "Read" : "Edit"}
            </button>
          </div>
          <h2>Introduction</h2>
          {editMode ? (
            <textarea value={updatedDescription} onChange={handleDescriptionChange} />
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FieldContainer;

*/