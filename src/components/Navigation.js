import { qnaData } from "../utils/constants";

import classes from "./Navigation.module.css";
import check from "../assets/check.png";

function Navigation({ navigate, marked }) {
  function navigateHandler(event) {
    const id = parseInt(event.target.innerText);
    navigate(id - 1);
  }

  return (
    <section className={classes["navigation"]}>
      <ul>
        {qnaData.map((item, index) => (
          <li key={item.id}>
            <button onClick={navigateHandler}>
              {item.id}{" "}
              {marked[index] === item.id - 1 ? (
                <img src={check} alt="checkmark" />
              ) : null}
            </button>
          </li>
        ))}
      </ul>

      <hr></hr>
    </section>
  );
}

export default Navigation;
