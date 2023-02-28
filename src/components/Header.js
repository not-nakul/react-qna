import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes["navbar-container"]}>
      <nav className={classes["navbar"]}>
        <h1>React Questionnaire ✨</h1>

        <div>
          <a href="https://github.com/not-nakul" target="_blank">
            Source code 🔗
          </a>
          <p>Built with 💖 by Nakul</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
