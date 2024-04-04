import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/page.module.css"
import logoPic from "@/public/wslogo.png"

import SearchBar from "./searchBar";

import { CardData } from "@/types/interfaces";


interface MainHeaderProps {
  data: CardData[];
}

const MainHeader: React.FC<MainHeaderProps> = ( {data} ) => {
  return (
    <header className={styles.mainHeader}>
      <Link href={"/"}>
        <Image
          src={logoPic}
          alt="Website Logo"
        />
      </Link>
      <SearchBar data = {data}/>
      <h3>Log In button</h3>
    </header>
  );
}

export default MainHeader;