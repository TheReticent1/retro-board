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
