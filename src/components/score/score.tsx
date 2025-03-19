import { useEffect, useState } from "react";
import "./score.css";
import { assessments, initialStateScore } from "../../data.constant";
import { getScore, saveOrUpdateScore } from "../../firebase/score_firebase";
import { useNavigate } from "react-router-dom";

const Score = () => {
  const navigate = useNavigate();
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
    setTimeout(() => window.alert("Assessment submitted!"), 1000);
  };
  return (
    <div className="retro-container">
      {localStorage.getItem("selectedRole") ? (
        <div className="">
          <h1 className="harry-potter-title">
            The Marauder’s Map Review: Tracking Our Team’s Magic 🗺️
          </h1>
          <div className="assess-container">
            {assessments.map((assessment) => (
              <div key={assessment.key} className="assess-card">
                <h2 className="assess-h2">
                  {assessment.title}{" "}
                  <span className="assess-span">
                    - {assessment.description}
                  </span>
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
          <button
            onClick={() => navigate("/summary")}
            className="d-button sub-button"
          >
            ✨ Summary
          </button>
        </div>
      ) : (
        <h1 className="harry-potter-title">Select Your Character First</h1>
      )}
    </div>
  );
};

export default Score;
