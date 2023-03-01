import { useEffect, useState } from "react";
import { qnaData } from "../utils/constants";

import Result from "./Result";
import Navigation from "./Navigation";

import classes from "./QuestionList.module.css";
import next from "../assets/next.png";
import previous from "../assets/previous.png";
import time from "../assets/time.png";
import question from "../assets/question.png";

function QuestionList() {
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const totalQuestions = qnaData.length;
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      alert("You ran out of time! Your choices have been submitted.");
      submitHandler();
      return;
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  function answerUpdateHandler(event) {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = event.target.value;
    setAnswers(updatedAnswers);
  }

  function previousQuestionHandler() {
    if (currentQuestion > 0) {
      setCurrentQuestion((previous) => previous - 1);
    }
  }

  function nextQuestionHandler() {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((previous) => previous + 1);
    }
  }

  function questionChangeHandler(id) {
    setCurrentQuestion(id);
  }

  function submitHandler(event) {
    event?.preventDefault();

    setScore(
      answers.reduce((total, answer, index) => {
        if (answer === qnaData[index].correct) {
          return total + 1;
        } else {
          return total;
        }
      }, 0)
    );

    setSubmitted(true);
  }

  function resetHandler() {
    setAnswers([]);
    setCurrentQuestion(0);
    setScore(0);
    setSubmitted(false);
    setTimeLeft(120);
  }

  return (
    <section className="container">
      {submitted ? (
        <Result
          score={score}
          totalQuestions={totalQuestions}
          reset={resetHandler}
        />
      ) : (
        <main className={classes["questions"]}>
          <Navigation navigate={questionChangeHandler} />

          <header>
            <h1>
              <img src={question} />
              {currentQuestion + 1}/{totalQuestions}
            </h1>
            <h1>
              <img src={time} alt="clock" />
              {` ${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? "0" : ""}${
                timeLeft % 60
              }`}
            </h1>
          </header>

          <h1 className={classes["question-text"]}>
            {qnaData[currentQuestion].question}
          </h1>

          <form onSubmit={submitHandler}>
            <ul className={classes["options-list"]}>
              {qnaData[currentQuestion].choices.map((choice, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      name="answer"
                      value={choice}
                      checked={answers[currentQuestion] === choice}
                      onChange={answerUpdateHandler}
                    />
                    {choice}
                  </label>
                </li>
              ))}
            </ul>

            <footer className={classes["buttons-container"]}>
              <button
                type="button"
                onClick={previousQuestionHandler}
                disabled={currentQuestion === 0}
              >
                <img src={previous} alt="previous" />
              </button>
              <button
                type="button"
                onClick={nextQuestionHandler}
                disabled={currentQuestion === totalQuestions - 1}
              >
                <img src={next} alt="next" />
              </button>
              {answers.length === totalQuestions &&
                !answers.includes(undefined) && (
                  <button type="submit" disabled={answers.includes(null)}>
                    Submit
                  </button>
                )}
            </footer>
          </form>
        </main>
      )}
    </section>
  );
}

export default QuestionList;
