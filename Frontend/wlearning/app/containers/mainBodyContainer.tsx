import styles from "@/styles/page.module.css"
import Card from "@/app/components/card";

let cardData = [
  {
    field: "Mathematics",
    description:
      "Mathematics is the abstract science of numbers, quantity, and space. It is a fundamental tool used in many fields of study, including physics, engineering, computer science, economics, and finance. Mathematics provides a language for describing relationships, patterns, and structures in the world around us.  Through the study of mathematics, we develop critical thinking skills, problem-solving abilities, and the ability to analyze complex systems.",
    link: "/mathematics", // Adjust route based on your setup
  },
  {
    field: "Physics",
    description:
      "Physics is the fundamental science that studies matter, energy, and their interactions. It is one of the oldest disciplines, and its discoveries have played a crucial role in shaping our understanding of the universe. Physics encompasses a wide range of sub-disciplines, including mechanics, electromagnetism, thermodynamics, optics, quantum mechanics, and relativity. Physics provides a framework for explaining phenomena from the smallest subatomic particles to the vast expanse of the cosmos. Studying physics equips us with the knowledge to understand the forces that govern our world and develop new technologies that improve our lives.",
    link: "/physics", // Adjust route based on your setup
  },
  {
    field: "Computer Science",
    description:
      "Computer science is the study of computers and computation. It encompasses a wide range of topics, from the design of hardware and software to the theory of algorithms and artificial intelligence.",
    link: "/computer-science",
  },
  {
    field: "Electronics",
    description:
      "Electronics is the branch of engineering that deals with the design, development, and application of electronic circuits, devices, and systems. It involves the study of electricity, electromagnetism, and the flow of electrons in various materials.",
    link: "/electronics",
  },
  {
    field: "Biology",
    description:
      "Biology is the study of living organisms, their structure, function, growth, origin, evolution, and distribution. It is a broad field that encompasses a wide range of sub-disciplines, including botany, zoology, microbiology, genetics, and biochemistry.",
    link: "/biology",
  },
];


const MainBodyContainer: React.FC = () => {
  return (
    <div className={styles.grid}>
      {cardData.map((card) => (
        <Card key={card.field} {...card} /> //NOTE - card.field is the identifier, then all props are unpacked.
      ))}
    </div>
  );
}

export default MainBodyContainer;