import classes from "./Result.module.css";

function Result({ score, totalQuestions, reset }) {
  return (
    <main className={classes["results"]}>
      <header>
        <h1>Submitted ✅</h1>
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
        <button onClick={reset}>Retake 🔙</button>
        <button>Home 🏠</button>
      </div>
    </main>
  );
}

export default Result;
