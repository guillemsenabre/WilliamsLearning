import styles from "@/styles/page.module.css"
import FieldMenu from "../components/fieldMenu";

const FieldContainer = () => {
  return (
    <div className={styles.fieldContainer}>
      <FieldMenu/>
      <div className={styles.fieldMain}>
        <h1>Field_n Title</h1>
        <div>
          <h2>Introduction</h2>
          <p>
            Mathematics is the abstract study of numbers, quantity, structure, space, and change. It encompasses a diverse range of fields including arithmetic, algebra, geometry, calculus, and more. At its core, mathematics seeks to understand patterns, relationships, and logical reasoning through rigorous abstraction and formalization. It serves as a universal language, enabling communication and problem-solving across disciplines. Mathematics plays a fundamental role in science, engineering, economics, and various other fields, providing tools for modeling, analysis, and prediction. Its applications are ubiquitous, from designing bridges and analyzing data to cryptography and theoretical physics. Ultimately, mathematics serves as a foundation for human knowledge, fostering intellectual curiosity and advancing civilization.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FieldContainer;