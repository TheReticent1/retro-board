import { useEffect, useState } from "react";
import "./dashboard.css";
import {
  fetchBoardRealtime,
  updateBoard,
} from "../../firebase/board_db_operations";

export type ColumnType = {
  [key: string]: string[];
};

export const initialColumns: ColumnType = {
  "Dumbledore's Wisdom 🪄💡": ["-What went well"],
  "Snape’s Critique 📖⚡": ["-Need to improve"],
  "Luna’s Insights 🌙🔮": ["-What we learned"],
  "Hermione’s Plan 📝📚": ["-Action Items"],
};

const columnColors: { [key: string]: string } = {
  "Dumbledore's Wisdom 🪄💡": "#D4EDDA", // Green
  "Snape’s Critique 📖⚡": "#F8D7DA", // Red
  "Luna’s Insights 🌙🔮": "#D1ECF1", // Blue
  "Hermione’s Plan 📝📚": "#FFF3CD", // Yellow
};

const Dashboard = () => {
  const [columns, setColumns] = useState<ColumnType>();
  const [newCard, setNewCard] = useState("");
  const [selectedColumn, setSelectedColumn] = useState(
    Object.keys(initialColumns)[0]
  );

  useEffect(() => {
    const unsubscribe = fetchBoardRealtime(setColumns);
    return () => unsubscribe();
  }, []);
  const addCard = () => {
    if (newCard.trim() && columns) {
      const updatedCards = [...columns[selectedColumn], newCard];
      setColumns({
        ...columns,
        [selectedColumn]: updatedCards,
      });
      setNewCard("");
      updateBoard(selectedColumn, updatedCards);
    }
  };

  const removeCard = (index: number, col: string) => {
    if (index > 0) {
      const response = window.confirm(
        `Are you sure you want to delete card from ${col}`
      );
      if (response && columns) {
        columns[col].splice(index, 1);
        setColumns({ ...columns, [col]: [...columns[col]] });
        updateBoard(col, columns[col]);
      }
    }
  };

  return (
    <div>
      <div className="retro-container">
        <h1 className="harry-potter-title">
          🧙‍♂️ Hogwarts Retro Board Sprint-14 ⚡
        </h1>
        {columns ? (
          <div className="columns">
            {Object.entries(columns).map(([columnId, cards]) => (
              <div
                key={columnId}
                className="column"
                style={{ backgroundColor: columnColors[columnId] || "#f5f5f5" }}
              >
                <h2>{columnId}</h2>
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="card"
                    onClick={() => removeCard(index, columnId)}
                  >
                    {card}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="add-card">
        <input
          type="text"
          placeholder="Enter your magical insight..."
          value={newCard}
          onChange={(e) => setNewCard(e.target.value)}
        />
        <select
          value={selectedColumn}
          onChange={(e) => setSelectedColumn(e.target.value)}
        >
          {columns
            ? Object.keys(columns).map((col) => (
                <option key={col} value={col}>
                  {col}
                </option>
              ))
            : null}
        </select>
        <button onClick={addCard}>✨ Add Spell</button>
      </div>
    </div>
  );
};
export default Dashboard;
