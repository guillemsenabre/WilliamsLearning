'use client';

import styles from "@/styles/page.module.css"

import { FieldMenuItem } from "@/types/interfaces";


const FieldMenu: React.FC<FieldMenuItem> = ({ title, subtitle1, subtitle2, subtitle3 }) => {
  
  // Scroll into specific view (not dynamic yet)
  const handleScrollTo = ( id: string ) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior:"smooth"});
    }
  };

  return (
    <div className={styles.fieldMenu}>
      <p>IN THIS ARTICLE</p>
      <ul>
        <li>
          <a onClick={() => handleScrollTo("title")}><h2>{ title }</h2></a>
        </li>
        <li>
          <a onClick={() => handleScrollTo("mindmap")}><h3>{ subtitle1 }</h3></a>
        </li>
        <li> 
          <a onClick={() => handleScrollTo("description")}><h3>{ subtitle2 }</h3></a>
        </li>
        <li> 
          <a onClick={() => handleScrollTo("subFields")}><h3>{ subtitle3 }</h3></a>
        </li>
      </ul>
  </div>
  );
}

export default FieldMenu;