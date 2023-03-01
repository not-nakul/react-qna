import classes from "./Modal.module.css";

function Modal({ closeModal }) {
  return (
    <>
      <section className={classes["modal"]}>
        <header>You ran out of time!</header>
        <div>
          <p>
            Your choices have been submitted and scores have been evaluated.
          </p>
          <p>Click on the button below to view your scorecard.</p>
        </div>
        <button onClick={closeModal}>Okay</button>
      </section>

      <div className={classes["backdrop"]} onClick={closeModal}></div>
    </>
  );
}

export default Modal;
