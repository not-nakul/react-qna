import classes from "./Header.module.css";
import reactIcon from "../assets/favicon.png";
import github from "../assets/github.png";

function Header() {
  return (
    <header className={classes["navbar-bg"]}>
      <nav className={classes["navbar"]}>
        <h1>
          React QnA <img src={reactIcon} alt="react" />
        </h1>

        <div>
          <a href="https://github.com/not-nakul/react-qna" target="_blank">
            Code <img src={github} alt="github" />
          </a>
          <p>Built with 💖 by Nakul</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
