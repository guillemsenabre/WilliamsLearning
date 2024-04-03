import Link from "next/link";

import styles from "@/styles/page.module.css"

import SearchBar from "./searchBar";

import { CardData } from "@/types/interfaces";


interface MainHeaderProps {
  data: CardData[];
}

const MainHeader: React.FC<MainHeaderProps> = ( {data} ) => {
  return (
    <header className={styles.mainHeader}>
      <Link href={"/"}>
        <h3>WsL</h3>
      </Link>
      <SearchBar data = {data}/>
      <h3>Log In button</h3>
    </header>
  );
}

export default MainHeader;