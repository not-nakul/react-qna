import { useContext } from "react";

import AssessmentContext from "../utils/AssessmentContext";

import classes from "./Result.module.css";
import redo from "../assets/redo.png";
import home from "../assets/home.png";

function Result({ score, totalQuestions, reset }) {
  const toggleAssessment = useContext(AssessmentContext);

  return (
    <main className={classes["results"]}>
      <header>
        <h1>Submitted! </h1>
      </header>

      <div className={classes["score-container"]}>
        <p>Your score card 💯</p>

        <table className={classes["score-card"]}>
          <thead>
            <tr>
              <th>Total Questions</th>
              <th>Marked Correct</th>
              <th>Score</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{totalQuestions}</td>
              <td>{score}</td>
              <td>{Math.round((score / totalQuestions) * 100)}%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={classes["buttons-container"]}>
        <button onClick={reset}>
          Retake <img src={redo} alt="retake" />
        </button>
        <button onClick={toggleAssessment}>
          Home <img src={home} alt="home" />
        </button>
      </div>
    </main>
  );
}

export default Result;
