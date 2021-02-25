// Set up the constants from the DOM
const quizContainerEl = document.getElementById('quiz');
const resultsContainerEl = document.getElementById('results');
const submitButtonEl = document.getElementById('submit');

// Build the quiz
var buildQuiz = function () {

};

// Check the results
var showResults = function () {

};

// have a function running the timer
var quizTimer = function () {

};

buildQuiz();
quizTimer();

// on submit, show results
submitButtonEl.addEventListener('click', showResults, quizTimer);


// Store the questions
const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
  }
];
