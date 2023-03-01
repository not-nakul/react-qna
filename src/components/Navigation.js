import { qnaData } from "../utils/constants";

import classes from "./Navigation.module.css";

function Navigation({ navigate }) {
  function navigateHandler(event) {
    const id = parseInt(event.target.innerText);
    navigate(id - 1);
  }

  return (
    <section className={classes["navigation"]}>
      <ul>
        {qnaData.map((item) => (
          <li key={item.id}>
            <button onClick={navigateHandler}>{item.id}</button>
          </li>
        ))}
      </ul>

      <hr></hr>
    </section>
  );
}

export default Navigation;
