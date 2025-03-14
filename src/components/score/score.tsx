import { useState } from "react";
import "./score.css";

const assessments = [
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
const initialStateScore: { [key: string]: number } = {
  clarity: 0,
  energy: 0,
  psychological_safety: 0,
  work_life_balance: 0,
  confidence: 0,
  efficiency: 0,
};
const Score = () => {
  const [score, setScore] = useState(initialStateScore);
  const getColor = (val: number) => {
    if (val > 1 && val <= 3) return "red"; // 0-3: Bad
    if (val > 3 && val <= 5) return "orange"; // 3-5: Low
    if (val > 5 && val <= 7) return "yellow"; // 5-7: Medium
    if (val > 7) return "green";
    return "white"; // 7-10: Good
  };
  const handleScoreChange = (
    assessment: {
      title: string;
      description: string;
      key: string;
    },
    value: number
  ) => {
    setScore({
      ...score,
      [assessment.key]: value,
    });
  };

  const handleSubmit = () => {
    console.log(score);
  };
  return (
    <div className="retro-container">
      <h1 className="harry-potter-title">
        The Marauder’s Map Review: Tracking Our Team’s Magic 🗺️
      </h1>
      <div className="assess-container">
        {assessments.map((assessment) => (
          <div key={assessment.key} className="assess-card">
            <h2 className="assess-h2">
              {assessment.title}{" "}
              <span className="assess-span">- {assessment.description}</span>
            </h2>
            <input
              type="range"
              min="1"
              max="10"
              value={score[assessment.key]}
              onChange={(e) =>
                handleScoreChange(assessment, Number(e.target.value))
              }
              className="progress"
              style={{ background: getColor(score[assessment.key]) }}
            />
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} className="d-button sub-button">
        ✨ Submit Assessment
      </button>
    </div>
  );
};

export default Score;
