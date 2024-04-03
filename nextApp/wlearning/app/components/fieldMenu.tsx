'use client';

import styles from "@/styles/page.module.css"

import { FieldMenuItem } from "@/types/interfaces";


const FieldMenu: React.FC<FieldMenuItem> = ({ title, subtitle }) => {
  
  // Scroll into specific view (not dynamic yet)
  const handleScrollTo = ( id: string ) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior:"smooth"});
    }
  };

  return (
    <div className={styles.fieldMenu}>
      <h1>Index</h1>
      <ul>
        <li>
          <a onClick={() => handleScrollTo("title")}><h2>{ title }</h2></a>
        </li>
        <li>
          <a onClick={() => handleScrollTo("subtitle")}><h3>{ subtitle }</h3></a>
        </li>
      </ul>
  </div>
  );
}

export default FieldMenu;