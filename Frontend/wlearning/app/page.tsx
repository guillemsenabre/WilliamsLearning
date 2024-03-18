import styles from "../styles/page.module.css"
import MainBodyContainer from "./layouts/gridBodyLayout";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainBodyContainer/>
    </main>
  );
}
