import { CharacterDto, MemberDto } from "./shared.interface";

export const characters:CharacterDto[] = [
    {
      id: 101,
      actor: "Harry Potter ⚡",
      role: "The Boy Who Lived, Gryffindor, and the chosen one to defeat Voldemort.",
      selected: false,
    },
    {
      id: 102,
      actor: "Hermione Granger 📚",
      role: "The brightest witch of her age, known for her intelligence and loyalty.",
      selected: false,
    },
    {
      id: 103,
      actor: "Ron Weasley 🏆",
      selected: false,
      role: "Harry’s best friend, brave, funny, and a loyal Gryffindor.",
    },
    {
      id: 104,
      actor: "Albus Dumbledore 🧙‍♂️",
      selected: false,
      role: "Headmaster of Hogwarts, wise, and the only wizard Voldemort feared.",
    },
    {
      id: 105,
      actor: "Severus Snape 🖤",
      selected: false,
      role: "Potions master, mysterious, and secretly protected Harry",
    },
    {
      id: 106,
      selected: false,
      actor: "Lord Voldemort 🐍",
      role: "The Dark Lord, feared by all, and Harry’s greatest enemy.",
    },
    {
      id: 107,
      selected: false,
      actor: "Sirius Black 🐶",
      role: "Harry’s godfather, wrongly accused, and a member of the Order of the Phoenix.",
    },
    {
      selected: false,
      id: 108,
      actor: "Draco Malfoy 🐍",
      role: "Slytherin rival, often arrogant, but not entirely evil.",
    },
    {
      selected: false,
      id: 109,
      actor: "Minerva McGonagall 🦁",
      role: "Strict but fair Transfiguration professor and head of Gryffindor.",
    },
];

export const members:MemberDto[] = [
    { name: "Shefali", position: "Team Manager", likes: [] },
    {
      name: "Ravindra",
      position: "Team lead",
      likes: [],
    },
    {
      name: "Bhushan",
      position: "Project owner",
      likes: [],
    },
    {
      name: "Monali",
      position: "Senior Software developer",
      likes: [],
    },
    {
      name: "Sarvesh",
      position: "Software developer",
      likes: [],
    },
    {
      name: "Kamlesh",
      position: "Senior Software developer",
      likes: [],
    },
    {
      name: "Amol",
      position: "Quality Analyst",
      likes: [],
    },
    {
      name: "Amruta",
      position: "Quality Analyst",
      likes: [],
    },
];

export const initialStateScore:{ [key: string]: number } = {
    clarity: 0,
    energy: 0,
    psychological_safety: 0,
    work_life_balance: 0,
    confidence: 0,
    efficiency: 0,
};

export const assessments = [
  {
    title: "🦉 The Deluminator Effect (Clarity) 🏮",
    description:
      " Ensuring clear goals, tasks, and expectations, so no one is lost in the dark.",
    key: "clarity",
  },
  {
    title: "⚡ The Felix Felicis Factor (Energy) 🍀",
    description:
      "Measuring team motivation and enthusiasm to keep the magic alive.",
    key: "energy",
  },
  {
    title: "🛡️ The Protego Shield (Psychological Safety) ✨",
    description:
      "Creating a safe space where everyone can share ideas without fear.",
    key: "psychological_safety",
  },
  {
    title: "⏳ The Time-Turner Balance (Work-Life Balance) ⚖️",
    description: "Checking if we’re managing work and personal life wisely.",
    key: "work_life_balance",
  },
  {
    title: "🦁 The Gryffindor Spirit (Confidence) 💪",
    description: "Evaluating self-belief and courage in decision-making.",
    key: "confidence",
  },
  {
    title: "⚙️ The Wingardium Leviosa Flow (Efficiency) 🚀",
    description: "Ensuring smooth workflows with minimal friction.",
    key: "efficiency",
  },
];

export const assessmentsSummary = [
  {
    title: "🦉Clarity🏮",
    key: "clarity",
  },
  {
    title: "⚡ Energy 🍀",
    key: "energy",
  },
  {
    title: "🛡️ Psychological Safety ✨",
    key: "psychological_safety",
  },
  {
    title: "⏳ Work-Life Balance ⚖️",
    key: "work_life_balance",
  },
  {
    title: "🦁 Confidence 💪",
    key: "confidence",
  },
  {
    title: "⚙️ Efficiency 🚀",
    key: "efficiency",
  },
];