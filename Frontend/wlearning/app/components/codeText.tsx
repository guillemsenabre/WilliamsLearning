import styles from "@/styles/page.module.css"

// Inferring component type (Functional Component)
const CodeText: React.FC = () => {
  return (
    <div className={styles.description}>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>app/page.tsx</code>
      </p>
    </div>
  );
}

export default CodeText;