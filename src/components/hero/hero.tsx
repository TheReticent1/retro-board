import { startMainFireworkShow } from "../../animations/fireworks/fireworks";
import "./hero.css";
const members = [
  { name: "Shefali", position: "Team Manager", likes: 0 },
  {
    name: "Ravindra",
    position: "Team lead",
    likes: 0,
  },
  {
    name: "Bhushan",
    position: "Project owner",
    likes: 0,
  },
  {
    name: "Monali",
    position: "Senior Software developer",
    likes: 0,
  },
  {
    name: "Sarvesh",
    position: "Software developer",
    likes: 0,
  },
  {
    name: "Kamlesh",
    position: "Senior Software developer",
    likes: 0,
  },
  {
    name: "Amol",
    position: "Quality Analyst",
    likes: 0,
  },
  {
    name: "Amruta",
    position: "Quality Analyst",
    likes: 0,
  },
];

const characters = [
  {
    id: 101,
    actor: "Harry Potter ⚡",
    role: "The Boy Who Lived, Gryffindor, and the chosen one to defeat Voldemort.",
  },
  {
    id: 102,
    actor: "Hermione Granger 📚",
    role: "The brightest witch of her age, known for her intelligence and loyalty.",
  },
  {
    id: 103,
    actor: "Ron Weasley 🏆",
    role: "Harry’s best friend, brave, funny, and a loyal Gryffindor.",
  },
  {
    id: 104,
    actor: "Albus Dumbledore 🧙‍♂️",
    role: "Headmaster of Hogwarts, wise, and the only wizard Voldemort feared.",
  },
  {
    id: 105,
    actor: "Severus Snape 🖤",
    role: "Potions master, mysterious, and secretly protected Harry",
  },
  {
    id: 106,
    actor: "Lord Voldemort 🐍",
    role: "The Dark Lord, feared by all, and Harry’s greatest enemy.",
  },
  {
    id: 107,
    actor: "Sirius Black 🐶",
    role: "Harry’s godfather, wrongly accused, and a member of the Order of the Phoenix.",
  },
  {
    id: 108,
    actor: "Draco Malfoy 🐍",
    role: "Slytherin rival, often arrogant, but not entirely evil.",
  },
  {
    id: 109,
    actor: "Rubeus Hagrid 🦉",
    role: "Keeper of Keys and Grounds at Hogwarts, half-giant, and a caring protector of magical creatures.",
  },
];

const Hero = () => {
  return (
    <div>
      <div className="retro-container">
        <h1 className="harry-potter-title">🤓 Harry Potter of Sprint-14 🏆</h1>
        <div className="card-container">
          {members.map((member, index) => (
            <div className="h-card" key={`card${index}`}>
              <h2>{member.name}</h2>
              {/* <p>{member.position}</p> */}
              <p className="votes">Votes: {member.likes}</p>
            </div>
          ))}
        </div>
        <div id="fireworks-container"></div>
      </div>

      <div className="add-card">
        <button onClick={() => startMainFireworkShow()} className="emoji-btn">
          🪄
        </button>
        {characters.map((character, index) => (
          <button
            title={character.role}
            key={`character${character.id}`}
            className="h-button"
          >
            {character.actor}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
