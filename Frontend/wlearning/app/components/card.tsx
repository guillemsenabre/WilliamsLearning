import styles from "../../styles/page.module.css"

interface CardProps {
  field: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ field, description, link}) => {
  return (
    <a href={ link } className={styles.card}>
    <h2>
      { field } <span>-&gt;</span>
    </h2>
    <p>{ description }</p>
  </a>
  );
}

export default Card;
