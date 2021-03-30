// Set up the constants from the DOM
const quizStartContainerEl = document.getElementById('quiz-start-container');
const quizContentEl = document.getElementById('quiz-content');
const resultsContainerEl = document.getElementById('results');
const quizStartButtonEl = document.getElementById('quiz-start');
const timeDisplay = document.querySelector('#timer')

const totalTime = 180;

// Build the quiz
const buildQuiz = function () {

	// Remove the intro DOM elements
	quizStartContainerEl.remove();

	// Add the submit button at the end of the div
	const submitButton = document.createElement("button");
	submitButton.setAttribute("id", "submit")
  	const buttonText = document.createTextNode("Submit Quiz");
  	submitButton.appendChild(buttonText);

	// Variable to store the HTML output
	const output = [];

	// For each question
	myQuestions.forEach((currentQuestion, questionNumber) => {

		// Store the answers of each question
		const answers = [];

		// An for each available answer..
		for(letter in currentQuestion.answers) {

			// Add an HTML radio button
			answers.push(
				`<label>
					<input type="radio" name="question${questionNumber}" value="${letter}">
            		${letter} :
            		${currentQuestion.answers[letter]}
          			</label>`
			);
		}

		// add this question and its answers to the output
      	output.push(
        	`<div class="question"> ${currentQuestion.question} </div>
        	<div class="answers"> ${answers.join('')} </div>`
      	);
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContentEl.innerHTML = output.join('');
  quizContentEl.appendChild(submitButton);
};

// Check the results
const showResults = function () {

	// gather answer containers from our quiz
	const answerContainers = quizContentEl.querySelectorAll('.answers');

	// keep track of users's answers
	let numCorrect = 0;

	// for each...
	myQuestions.forEach((currentQuestion, questionNumber) => {

		// find the selected answer
		let answerContainer = answerContainers[questionNumber];
		let selector = `input[name=question${questionNumber}]:checked`;
		let userAnswer = (answerContainer.querySelector(selector) || {}).value;

		// if correct
		if (userAnswer === currentQuestion.correctAnswer) {
			// add to the number of correct answers
			numCorrect++;
			// color the answers green
			answerContainers[questionNumber].style.color = 'lightgreen';
		} else {
			answerContainers[questionNumber].style.color = 'red';
		}

	});

	// Remove the quiz content
	quizContentEl.remove();

	// Display the results
	resultsContainerEl.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
};

// have a function running the timer
const quizTimer = function(duration, display) {

	// assign the variables
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timeDisplay.textContent = "You have " + minutes + ":" + seconds + " left";

        if (--timer < 0) {
            timer = duration;
            totalTime = 0;
        }
    }, 1000);
};


quizStartButtonEl.addEventListener('click', function (){
	// When the user clicks the quiz, we build the quiz and start the timer.
	buildQuiz();
	quizTimer(totalTime, timeDisplay);
});

// on submit, show results
document.addEventListener('click', function(e) {
	if (e.target.id === 'submit') {
		showResults();
	}
});


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
