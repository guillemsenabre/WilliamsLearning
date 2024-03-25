import styles from "@/styles/page.module.css"
import Link from 'next/link'

interface CardProps {
  field: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ field, description, link}) => {
  return (
    <div className={styles.card}>
      <Link href={ link }>
        <h2>
          { field } <span>-&gt;</span>
        </h2>
        <p>{ description }</p>
      </Link>
    </div>
  );
}

export default Card;
