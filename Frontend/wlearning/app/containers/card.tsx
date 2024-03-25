import styles from "@/styles/page.module.css"
import Link from 'next/link'

interface CardProps {
  index: string;
  field: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ index, field, description, link}) => {
  return (
    <div className={styles.card}>
      <Link 
        href={{ 
          pathname: `${link}`,
          query: {index: `${index}`}
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
