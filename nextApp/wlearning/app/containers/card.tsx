import styles from "@/styles/page.module.css"
import Link from 'next/link'

import { CardData } from "@/types/interfaces";



const Card: React.FC<CardData> = ({ field, description, slug }) => {
  return (
    <div className={styles.card}>
      <Link 
        href={{ 
          pathname: `${slug}`
          // Alternative approach to find right field
          //query: {index: `${id}`}
          }}
        >  
        <h2>
          { field } <span>-&gt;</span>
        </h2>
        <p>{ description }</p>
      </Link>
    </div>
  );
}

export default Card;
