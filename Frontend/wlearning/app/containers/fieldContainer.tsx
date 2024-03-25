import styles from "@/styles/page.module.css"

const FieldContainer = () => {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldMenu}>
        <h1>Nav list</h1>
        <ul>
          <li><h2>Title</h2></li>
          <li><h3>SubTitle</h3></li>
          <li><h3>SubTitle</h3></li>
          <li><h3>SubTitle</h3></li>
          <li><h3>SubTitle</h3></li>
          <li><h4>SubTitle</h4></li>
          <li><h2>Title</h2></li>
          <li><h3>SubTitle</h3></li>
          <li><h3>SubTitle</h3></li>
          <li><h3>SubTitle</h3></li>
          <li><h3>SubTitle</h3></li>
        </ul>
      </div>
      <div className={styles.fieldMain}>
        <h1>Field_n Title</h1>
        <div>
          <h2>Introduction</h2>
          <p>
            Mathematics is the abstract study of numbers, quantity, structure, space, and change. It encompasses a diverse range of fields including arithmetic, algebra, geometry, calculus, and more. At its core, mathematics seeks to understand patterns, relationships, and logical reasoning through rigorous abstraction and formalization. It serves as a universal language, enabling communication and problem-solving across disciplines. Mathematics plays a fundamental role in science, engineering, economics, and various other fields, providing tools for modeling, analysis, and prediction. Its applications are ubiquitous, from designing bridges and analyzing data to cryptography and theoretical physics. Ultimately, mathematics serves as a foundation for human knowledge, fostering intellectual curiosity and advancing civilization.
          </p>
        </div>
        <div>
          <h2>History</h2>
          <p>
          The history of mathematics traces the development of mathematical concepts, techniques, and applications from ancient civilizations to the modern era. Ancient civilizations such as the Egyptians, Babylonians, Greeks, and Chinese made significant contributions to mathematics, including arithmetic, geometry, and algebra. The Greeks, particularly Euclid, Archimedes, and Pythagoras, laid the groundwork for deductive reasoning and rigorous proofs. During the Middle Ages, Islamic scholars preserved and expanded upon Greek mathematical knowledge, introducing algebra and trigonometry. The Renaissance witnessed a revival of interest in mathematics, with figures like Leonardo da Vinci and Johannes Kepler advancing understanding in geometry and astronomy. The 17th and 18th centuries saw the development of calculus by Newton and Leibniz, revolutionizing mathematics and science. The 19th and 20th centuries brought further advancements in fields like abstract algebra, number theory, and mathematical logic, with notable figures including Gauss, Euler, Cantor, and Gödel. Today, mathematics continues to evolve, driving innovation and shaping our understanding of the universe.
          </p>
        </div>
        <div>
          <h2>Applications</h2>
          <p>
          The applications of mathematics are vast and pervasive, influencing nearly every aspect of modern life. In engineering, mathematics is essential for designing structures, analyzing systems, and optimizing processes. It underpins fields like civil engineering, aerospace engineering, and electrical engineering, enabling the construction of bridges, airplanes, and electronic circuits. In physics, mathematics provides the language for describing natural phenomena, from the motion of celestial bodies to the behavior of subatomic particles. In finance and economics, mathematics is used for modeling financial markets, optimizing portfolios, and predicting economic trends. It plays a crucial role in computer science, powering algorithms, cryptography, and artificial intelligence. Mathematics also impacts fields as diverse as medicine, biology, and environmental science, facilitating data analysis, modeling biological processes, and understanding ecological systems. From cryptography to climate modeling, mathematics serves as a powerful tool for solving complex problems and driving innovation in virtually every domain.
          </p>
        </div>
        <div>
          <h2>Conclusion</h2>
          <p>
          To sum up...
          </p>
        </div>
        <div>
          <h2>Notes</h2>
          <p>
          Some notes about mathematics
          </p>
        </div>
        <div>
          <h2>Child elements</h2>
          <p>
          Child fields (Mathematics: algebra, calculus,... 3 max)
          </p>
        </div>
        <div>
          <h2>Related Fields</h2>
          <p>
          Here we put a grid layout and display related cards
          </p>
        </div>
      </div>
    </div>
  );
}

export default FieldContainer;