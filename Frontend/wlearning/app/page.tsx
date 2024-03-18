import styles from "../styles/page.module.css"
import MainBodyContainer from "./containers/mainBodyContainer";
import MainHeader from "./components/header";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainHeader/>
      <MainBodyContainer/>
    </main>
  );
}
