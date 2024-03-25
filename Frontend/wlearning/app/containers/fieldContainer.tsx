import styles from "@/styles/page.module.css"
import FieldMenu from "../components/fieldMenu";

interface DynamicProps {
  field: string,
  description: string
}

const FieldContainer: React.FC<DynamicProps> = ({ field, description }) => {
  return (
    <div className={styles.fieldContainer}>
      <FieldMenu/>
      <div className={styles.fieldMain}>
        <h1>{ field }</h1>
        <div>
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