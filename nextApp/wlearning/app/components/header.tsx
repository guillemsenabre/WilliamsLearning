import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/page.module.css"
import logoPic from "@/public/wslogo3.png"

import SearchBar from "./searchBar";

import { CardData } from "@/types/interfaces";


interface MainHeaderProps {
  data: CardData[];
}

const MainHeader: React.FC<MainHeaderProps> = ( {data} ) => {
  return (
    <header className={styles.mainHeader}>
      <Link href={"/"} className={styles.logoImageContainer}>
        <Image
          className={styles.logoImage}
          src={logoPic}
          alt="Website Logo"
        />
      </Link>
      <SearchBar data = {data}/>
    </header>
  );
}

export default MainHeader;