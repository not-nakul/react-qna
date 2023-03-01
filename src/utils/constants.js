export const qnaData = [
  {
    id: 1,
    question: "What is ReactJS?",
    choices: [
      "JavaScript library",
      "Javascript framework",
      "Programming language",
      "Black magic",
    ],
    correct: "JavaScript library",
  },
  {
    id: 2,
    question: "What makes React so performant?",
    choices: ["Hooks", "Reconciliation", "JSX", "Components"],
    correct: "Reconciliation",
  },
  {
    id: 3,
    question: "What is JSX?",
    choices: [
      "JavaScript XML",
      "HTML in JavaScript",
      "HTML like syntax",
      "JavaScript library",
    ],
    correct: "HTML like syntax",
  },
  {
    id: 4,
    question: "What are the different ways to create React components?",
    choices: [
      "Functional components",
      "Class based components",
      "Both A & B",
      "None of the above",
    ],
    correct: "Both A & B",
  },
  {
    id: 5,
    question: "What is Virtual DOM?",
    choices: [
      "HTML structure",
      "JSX",
      "Representation of real DOM",
      "Real DOM",
    ],
    correct: "Representation of real DOM",
  },
  {
    id: 6,
    question: "What are React Hooks?",
    choices: ["Superpowers", "Components", "Imports", "Functions"],
    correct: "Functions",
  },
  {
    id: 7,
    question: "How many elements can a valid React Component return?",
    choices: ["1", "2", "3", "As many as possible"],
    correct: "1",
  },
  {
    id: 8,
    question: "Which of the following is used to handle code-splitting?",
    choices: ["React.memo", "React.fallback", "React.split", "React.lazy"],
    correct: "React.lazy",
  },
  {
    id: 9,
    question: "Which of the following best defines the key prop?",
    choices: [
      "it has no benefit whatsoever",
      "it is a way for React to identify a newly added item in a list",
      "it is an atribute in HTML",
      "it is the same as the id attribute",
    ],
    correct: "it is a way for React to identify a newly added item in a list",
  },
  {
    id: 10,
    question: "In ReactJS, what is State?",
    choices: [
      "It's a temporary storage of the elements",
      "It's a state of the execution of the ReactJS application",
      "It's an internal storage of the components",
      "All of the above",
    ],
    correct: "It's an internal storage of the components",
  },
];

export const instructions = [
  { id: 1, text: "This is a Multiple Choice QnA based around ReactJS" },
  { id: 2, text: "There are a total of 10 questions" },
  { id: 3, text: "Each question is mandatory" },
  { id: 4, text: "There is no negative marking" },
  { id: 5, text: "You can switch between questions and change the selection" },
  { id: 6, text: "Each question rewards +1 score if marked correct" },
  { id: 7, text: "Time limit is set to 2 minutes (~10s for each question)" },
  {
    id: 8,
    text: "Once all questions have been marked, submit button is unlocked",
  },
  { id: 9, text: "Click on submit to display your scores" },
  { id: 10, text: "You can retake the assessment however many times you want" },
];
