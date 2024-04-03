import styles from "@/styles/page.module.css"
import SearchBar from "./searchBar";

interface CardData {
  index: string;
  field: string;
  description: string;
  link: string;
}

interface MainHeaderProps {
  data: CardData[];
}
const MainHeader: React.FC<MainHeaderProps> = ( {data} ) => {
  return (
    <header className={styles.mainHeader}>
      <h3>WilliamS Learning</h3>  
      <SearchBar data = {data}/>
      <h3>Log In button</h3>
    </header>
  );
}

export default MainHeader;