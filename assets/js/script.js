// Set up the constants from the DOM
const quizStartContainerEl = document.getElementById('quiz-start-container');
const quizContainerEl = document.getElementById('quiz');
const resultsContainerEl = document.getElementById('results');
const quizStartButtonEl = document.getElementById('quiz-start');
const submitButtonEl = document.getElementById('submit');
const timeDisplay = document.querySelector('#timer')

// Build the quiz
var buildQuiz = function () {

	// Remove the intro DOM elements
	quizStartContainerEl.remove();
};

// Check the results
var showResults = function () {

};

// have a function running the timer
var quizTimer = function(duration, display) {

	// assign the variables
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timeDisplay.textContent = "You have " + minutes + ":" + seconds + " left";

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
};


quizStartButtonEl.addEventListener('click', function (){
	// When the user clicks the quiz, we build the quiz and start the timer.
	buildQuiz();
	quizTimer(180, timeDisplay);
});

// on submit, show results
// submitButtonEl.addEventListener('click', showResults);


// Store the questions
const myQuestions = [
	{
	question: "Where is the tallest Pyramid in México?",
	answers: {
			a: "Cairo",
			b: "Palenque",
			c: "Tenochtitlán"
		},
	correctAnswer: "b"
	},
  	{
    question: "How many Commonwealths are in the United States??",
    answers: {
			a: "1",
			b: "5",
			c: "4",
			d: "7",
			e: "What's a Commonwealth?"
		},
	correctAnswer: "c"
	},
	{
	question: "In which year was UC Berkeley's Sather Tower built?",
	answers: {
			a: "1868",
			b: "1919",
			c: "1911",
			d: "1914"
		},
	correctAnswer: "d"
	},
	{
	question: "The first and only #1 top 100 Billboard single for Daft Punk was what song?",
	answers: {
		a: "Starboy",
		b: "One More Time",
		c: "Harder Better Faster Stronger",
		d: "Get Lucky"
		},
	correctAnswer: "a"
	},
	{
	question: "Where did the first Metal Gear game for the NES take place?",
	answers: {
		a: "Zanzibar Land",
		b: "Outer Heaven",
		c: "Lesotho",
		d: "Borneo",
		e: "New Zeland"
	},
	correctAnswer: "d"
	},
	{
	question: "What is the fastest way to ace a Javascript Quiz?",
	answers: {
		a: "Metal Gear",
		b: "Look at the console",
		c: "Use Google",
		d: "Phone a Friend",
		e: "Think Outside the Box",
		f: "An Encyclopedia",
		g: "I Give Up"
	},
	correctAnswer: "b"
	}
];
