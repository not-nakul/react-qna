import { useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import QuestionList from "./components/QuestionList";
import AssessmentContext from "./utils/AssessmentContext";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  function toggleAssessment() {
    setIsStarted((previous) => !previous);
  }

  return (
    <AssessmentContext.Provider value={toggleAssessment}>
      <Header />
      {!isStarted ? <Home /> : <QuestionList />}
    </AssessmentContext.Provider>
  );
}

export default App;
