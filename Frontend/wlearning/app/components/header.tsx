import styles from "@/styles/page.module.css"
import SearchBar from "./searchBar";

const MainHeader: React.FC = () => {
  return (
    <header className={styles.mainHeader}>
      <h3>WilliamS Learning</h3>  
      <SearchBar/>
      <h3>Log In button</h3>
    </header>
  );
}

export default MainHeader;