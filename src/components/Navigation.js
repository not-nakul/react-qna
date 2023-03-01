import { qnaData } from "../utils/constants";

import classes from "./Navigation.module.css";
import check from "../assets/check.png";

function Navigation({ navigate, marked }) {
  function navigateHandler(index) {
    navigate(index);
  }

  return (
    <section className={classes["navigation"]}>
      <ul>
        {qnaData.map((item, index) => (
          <li key={item.id}>
            <button onClick={() => navigateHandler(index)}>
              {item.id}
              {marked[index] === item.id - 1 ? (
                <img
                  src={check}
                  alt="checkmark"
                  className={classes["checkmark"]}
                />
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
