const sql = require('better-sqlite3');
const db = sql('data.db');

const data = [
  {
    index: "0",
    field: "Mathematics",
    description: "Mathematics is the abstract science of numbers, quantity, and space. It is a fundamental tool used in many fields of study, including physics, engineering, computer science, economics, and finance.",
    link: "/mathematics"
  },
  {
    index: "1",
    field: "Physics",
    description: "Physics is the fundamental science that studies matter, energy, and their interactions. It is one of the oldest disciplines, and its discoveries have played a crucial role in shaping our understanding of the universe.",
    link: "/physics"
  },
  {
    index: "2",
    field: "Computer Science",
    description: "Computer science is the study of computers and computation. It encompasses a wide range of topics, from the design of hardware and software to the theory of algorithms and artificial intelligence.",
    link: "/computer-science"
  },
  {
    index: "3",
    field: "Electronics",
    description: "Electronics is the branch of engineering that deals with the design, development, and application of electronic circuits, devices, and systems. It involves the study of electricity, electromagnetism, and the flow of electrons in various materials.",
    link: "/electronics"
  },
  {
    index: "4",
    field: "Biology",
    description: "Biology is the study of living organisms, their structure, function, growth, origin, evolution, and distribution. It is a broad field that encompasses a wide range of sub-disciplines, including botany, zoology, microbiology, genetics, and biochemistry.",
    link: "/biology"
  },
  {
    index: "5",
    field: "Materials",
    description: "Materials science is the study of the properties of matter and how these properties are used to design new materials with specific functions.",
    link: "/materials"
  },
  {
    index: "6",
    field: "Chemistry",
    description: "Chemistry is the study of matter, its properties, composition, and reactions.",
    link: "/chemistry"
  },
  {
    index: "7",
    field: "Geology",
    description: "Geology is the study of the Earth, its composition, structure, and processes.",
    link: "/geology"
  }
  ];

db.prepare(`
  CREATE TABLE IF NOT EXISTS data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    field TEXT NOT NULL,
    description TEXT NOT NULL,
    link TEXT NOT NULL
  )
`).run();

async function initData() {
  const stmt = db.prepare(`
    INSERT INTO data VALUES (
      null,
      @field,
      @description,
      @link
    )
  `);

  for (const field of data) {
    stmt.run(field)
  }
}


initData();
