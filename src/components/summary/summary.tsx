import { useEffect, useState } from "react";
import "../score/score.css";
import { assessmentsSummary, initialStateScore } from "../../data.constant";
import { useNavigate } from "react-router-dom";
import { getAllRecordsScores } from "../../firebase/score_firebase";

const Summary = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(initialStateScore);
  const [records, setRecords] = useState<{ [key: string]: string }[]>();
  const [count, setCount] = useState(0);
  useEffect(() => {
    const unsubscribe = getAllRecordsScores(setRecords);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (records) {
      calculateSumAndAverage(records);
    }
  }, [records]);

  const calculateSumAndAverage = (data: any[]) => {
    const sum: any = {};
    const avg: any = {};
    const totalEntries = data.length;
    setCount(totalEntries);
    data.forEach((obj) => {
      Object.keys(obj).forEach((key: string) => {
        if (key !== "id") {
          sum[key] = (sum[key] || 0) + obj[key];
        }
      });
    });
    Object.keys(sum).forEach((key: string) => {
      avg[key] = sum[key] / totalEntries;
    });

    setScore(avg);
  };
  const getColor = (val: number) => {
    if (val > 1 && val <= 3) return "red";
    if (val > 3 && val <= 5) return "orange";
    if (val > 5 && val <= 7) return "yellow";
    if (val > 7) return "green";
    return "white";
  };
  return (
    <div className="retro-container">
      <h1 className="harry-potter-title">Assessment Summary Sprint 15 🗺️</h1>
      <h2>{count} people took assessment</h2>
      <div className="assess-container">
        {assessmentsSummary.map((assessment) => (
          <div key={assessment.key} className="assess-card">
            <h2 className="assess-h2">{assessment.title}</h2>
            <h2 className="assess-h2">{score[assessment.key]}</h2>
            <input
              type="range"
              min="1"
              max="10"
              readOnly
              value={score[assessment.key]}
              className="progress"
              style={{ background: getColor(score[assessment.key]) }}
            />
          </div>
        ))}
      </div>
      <button
        className="d-button sub-button"
        onClick={() => navigate("/assessment")}
      >
        ✨ Close
      </button>
    </div>
  );
};
export default Summary;
