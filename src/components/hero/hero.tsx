import { startMainFireworkShow } from "../../animations/fireworks/fireworks";
import "./hero.css";
const Hero = () => {
  return (
    <div>
      <div className="retro-container">
        <h1 className="harry-potter-title">🤓 Harry Potter of Sprint-14 🏆</h1>
        <div id="fireworks-container"></div>
      </div>

      <div className="add-card">
        <button onClick={() => startMainFireworkShow()} className="emoji-btn">
          🪄
        </button>
        <button title="The Boy Who Lived, Gryffindor, and the chosen one to defeat Voldemort.">
          Harry Potter ⚡
        </button>
        <button title="The brightest witch of her age, known for her intelligence and loyalty.">
          Hermione Granger 📚
        </button>
        <button title=" Harry’s best friend, brave, funny, and a loyal Gryffindor.">
          Ron Weasley 🏆
        </button>
        <button title="Headmaster of Hogwarts, wise, and the only wizard Voldemort feared.">
          Albus Dumbledore 🧙‍♂️
        </button>
        <button title="Potions master, mysterious, and secretly protected Harry">
          Severus Snape 🖤
        </button>
        <button title="The Dark Lord, feared by all, and Harry’s greatest enemy.">
          Lord Voldemort 🐍
        </button>
        <button title="Harry’s godfather, wrongly accused, and a member of the Order of the Phoenix.">
          Sirius Black 🐶{" "}
        </button>
        <button title="Slytherin rival, often arrogant, but not entirely evil.">
          Draco Malfoy 🐍
        </button>
      </div>
    </div>
  );
};

export default Hero;
