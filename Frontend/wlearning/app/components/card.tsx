import styles from "../../styles/page.module.css"
import Link from 'next/link'

interface CardProps {
  field: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ field, description, link}) => {
  return (
  <Link href={ link } className={styles.card}>
    <h2>
      { field } <span>-&gt;</span>
    </h2>
    <p>{ description }</p>
  </Link>
  );
}

export default Card;
