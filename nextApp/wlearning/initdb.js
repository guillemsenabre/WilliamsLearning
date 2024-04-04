const sql = require('better-sqlite3');
const db = sql('data.db');

const data = [
  {
    field: "Mathematics",
    description: "Mathematics is the abstract science of numbers, quantity, and space. It is a fundamental tool used in many fields of study, including physics, engineering, computer science, economics, and finance.",
    link: "/mathematics"
  },
  {
    field: "Physics",
    description: "Physics is the fundamental science that studies matter, energy, and their interactions. It is one of the oldest disciplines, and its discoveries have played a crucial role in shaping our understanding of the universe.",
    link: "/physics"
  },
  {
    field: "Computer Science",
    description: "Computer science is the study of computers and computation. It encompasses a wide range of topics, from the design of hardware and software to the theory of algorithms and artificial intelligence.",
    link: "/computer-science"
  },
  {
    field: "Electronics",
    description: "Electronics is the branch of engineering that deals with the design, development, and application of electronic circuits, devices, and systems. It involves the study of electricity, electromagnetism, and the flow of electrons in various materials.",
    link: "/electronics"
  },
  {
    field: "Biology",
    description: "Biology is the study of living organisms, their structure, function, growth, origin, evolution, and distribution. It is a broad field that encompasses a wide range of sub-disciplines, including botany, zoology, microbiology, genetics, and biochemistry.",
    link: "/biology"
  },
  {
    field: "Materials",
    description: "Materials science is the study of the properties of matter and how these properties are used to design new materials with specific functions.",
    link: "/materials"
  },
  {
    field: "Chemistry",
    description: "Chemistry is the study of matter, its properties, composition, and reactions.",
    link: "/chemistry"
  },
  {
    field: "Geology",
    description: "Geology is the study of the Earth, its composition, structure, and processes.",
    link: "/geology"
  },
  {
    field: "Astrophysics",
    description: "Astrophysics is the branch of astronomy that deals with the physics of the universe, including the physical properties and processes of celestial objects such as stars, galaxies, and the interstellar medium.",
    link: "/astrophysics"
  },
  {
    field: "Astronomy",
    description: "Astronomy is the scientific study of celestial objects such as stars, planets, comets, and galaxies, as well as the phenomena that occur outside the Earth's atmosphere.",
    link: "/astronomy"
  },
  {
    field: "Environmental Science",
    description: "Environmental science is the interdisciplinary study of the environment and its interactions with living organisms, ecosystems, and human societies. It encompasses fields such as ecology, climatology, and conservation biology.",
    link: "/environmental-science"
  },
  {
    field: "Neuroscience",
    description: "Neuroscience is the scientific study of the nervous system, including its structure, function, development, and pathology. It covers a wide range of topics, from molecular and cellular neuroscience to cognitive and behavioral neuroscience.",
    link: "/neuroscience"
  },
  {
    field: "Psychology",
    description: "Psychology is the scientific study of the mind and behavior. It seeks to understand how people think, feel, and act, both individually and in groups.",
    link: "/psychology"
  },
  {
    field: "Sociology",
    description: "Sociology is the scientific study of society, including its origins, development, organization, and institutions. It examines social behavior, relationships, and cultural phenomena.",
    link: "/sociology"
  },
  {
    field: "Anthropology",
    description: "Anthropology is the study of human societies and cultures, both past and present. It encompasses fields such as archaeology, ethnography, and linguistics.",
    link: "/anthropology"
  },
  {
    field: "Political Science",
    description: "Political science is the systematic study of government, politics, and political behavior. It explores the theory and practice of governance, power dynamics, and public policies.",
    link: "/political-science"
  },
  {
    field: "History",
    description: "History is the study of the past, including the events, people, societies, and cultures that have shaped human civilization. It seeks to understand and interpret historical evidence to reconstruct and analyze past events.",
    link: "/history"
  },
  {
    field: "Economics",
    description: "Economics is the social science that studies how individuals, businesses, governments, and societies allocate scarce resources to satisfy their unlimited wants. It examines the production, distribution, and consumption of goods and services.",
    link: "/economics"
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
