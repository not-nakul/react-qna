import { useContext } from "react";

import { instructions } from "../utils/constants";
import AssessmentContext from "../utils/AssessmentContext";

import classes from "./Home.module.css";
import arrow from "../assets/arrow.png";

function Home() {
  const toggleAssessment = useContext(AssessmentContext);

  return (
    <section className="container">
      <main className={classes["homepage"]}>
        <header>Instructions</header>

        <ul className={classes["instructions"]}>
          {instructions.map((instruction) => (
            <li key={instruction.id}>
              <img src={arrow} alt="arrow" />
              <p>{instruction.text}</p>
            </li>
          ))}
        </ul>

        <div className={classes["buttons-container"]}>
          <button onClick={toggleAssessment}>Begin</button>
        </div>
      </main>
    </section>
  );
}

export default Home;
