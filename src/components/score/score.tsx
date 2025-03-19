import { useEffect, useState } from "react";
import "./score.css";
import { initialStateScore } from "../../data.constant";
import { getScore, saveOrUpdateScore } from "../../firebase/score_firebase";

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

const Score = () => {
  const [score, setScore] = useState(initialStateScore);
  const [id, setId] = useState("0");
  useEffect(() => {
    getUserScore();
  }, []);

  const getUserScore = async () => {
    const currentRole = localStorage.getItem("selectedRole");
    if (currentRole) {
      const actor = JSON.parse(currentRole || "");
      if (actor) {
        setId(String(actor.id));
        const data = await getScore(String(actor.id));
        if (data) {
          setScore(data);
        }
      }
    }
  };
  const getColor = (val: number) => {
    if (val > 1 && val <= 3) return "red";
    if (val > 3 && val <= 5) return "orange";
    if (val > 5 && val <= 7) return "yellow";
    if (val > 7) return "green";
    return "white";
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

  const handleSubmit = async () => {
    await saveOrUpdateScore(id, score);
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
