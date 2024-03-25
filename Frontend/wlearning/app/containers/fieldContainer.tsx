import styles from "@/styles/page.module.css"

const FieldContainer = () => {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldMenu}>
        <h1>Nav list</h1>
        <ul>
          <li><h2>Title</h2></li>
          <li><h3>SubTitle</h3></li>
          <li><h3>SubTitle</h3></li>
          <li><h3>SubTitle</h3></li>
          <li><h3>SubTitle</h3></li>
          <li><h2>Title</h2></li>
          <li><h3>SubTitle</h3></li>
          <li><h3>SubTitle</h3></li>
          <li><h3>SubTitle</h3></li>
          <li><h3>SubTitle</h3></li>
        </ul>
      </div>
      <div className={styles.fieldMain}>
        <h1>Information</h1>
      </div>
    </div>
  );
}

export default FieldContainer;