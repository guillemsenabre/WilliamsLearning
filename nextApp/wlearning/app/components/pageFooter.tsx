import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/page.module.css";

// Import github logo from public directory
import ghIcon from "@/public/ghicon.png"


interface AuthorInfo {
  name: string;
  githubUrl: string;
}

const PageFooter: React.FC = () => {
  const authorInfo: AuthorInfo = {
    name: "Guillem Senabre",
    githubUrl: "https://github.com/guillemsenabre/WilliamsLearning",
  };

  return (
    <div className={styles.pageFooterContainer}>
      <Link href={authorInfo.githubUrl}>
        <Image
          className={styles.gitIcon}
          src={ghIcon}
          alt="git icon"
        />
      </Link>
      <p>© 2024 {authorInfo.name}. Licensed under the Apache License, Version 2.0.</p>
    </div>
  );
};

export default PageFooter;
