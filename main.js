
const questions = [
    {
      text: " Javascript is an _______ language? ",
      options: [" Object-Oriented", "Object-Based", "Procedural", "None of the above"],
      answer: 0
    },
    {
      text: "Which of the following keywords is used to define a variable in Javascript?",
      options: ["var", "let", "Both A and B", "None of the above"],
      answer: 2
    },
    {
      text: "Which of the following methods is used to access HTML elements using Javascript?",
      options: ["getElementbyId()", "getElementsByClassName()", "Both A and B", "None of the above"],
      answer: 2
    }
    ,
    {
      text: "How can a datatype be declared to be a constant type?",
      options: ["const", "var", "let", "constant"],
      answer: 0
    }
    ,
    {
      text: " When an operators value is NULL, the typeof returned by the unary operator is?",
      options: ["Boolean", "Undefined", "Object", "Integer"],
      answer: 2
    }
    ,
    {
      text: "Which of the following are closures in Javascript?",
      options: ["Variables", "Functions", "Objects", "All of the above"],
      answer: 3
    }
    ,
    {
      text: " Javascript is an _______ language? ",
      options: [" Object-Oriented", "Object-Based", "Procedural", "None of the above"],
      answer: 0
    }
    ,
    {
      text: "Which of the following keywords is used to define a variable in Javascript?",
      options: ["var", "let", "Both A and B", "None of the above"],
      answer: 2
    }
    ,
    {
      text: "Which of the following methods is used to access HTML elements using Javascript?",
      options: ["getElementbyId()", "getElementsByClassName()", "Both A and B", "None of the above"],
      answer: 2
    }
    ,
    {
      text: "How can a datatype be declared to be a constant type?",
      options: ["const", "var", "let", "constant"],
      answer: 0
    }
    ,
    {
      text: " Javascript is an _______ language? ",
      options: [" Object-Oriented", "Object-Based", "Procedural", "None of the above"],
      answer: 0
    }
    ,
    {
      text: " When an operators value is NULL, the typeof returned by the unary operator is?",
      options: ["Boolean", "Undefined", "Object", "Integer"],
      answer: 2
    }
    
  ];



let currentQuestion = 0;
let score = 0;

const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question');
const optionsList = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreText = document.getElementById('score');
const main = document.getElementById('main');
const username = document.getElementById('fname');
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', nextQuestion);



const randomQuestions = []; 
while (randomQuestions.length < 10) {
  const randomIndex = questions[Math.floor(Math.random() * questions.length)];
  
  if (!randomQuestions.includes(randomIndex)) {
    randomQuestions.push(randomIndex);
  }
}




function startGame() {
  startButton.style.display = 'none';
  main.style.display ='none';
  questionContainer.style.display = 'block'; 
  showQuestion();
}

function showQuestion() {
  const question = randomQuestions[currentQuestion];
  questionNumber.textContent = `${currentQuestion + 1}/${randomQuestions.length}`;
  questionText.textContent = question.text;
  optionsList.innerHTML = '';
  fname.style.display = 'none';
  leaderboard.style.display = 'none'; 
  for (let i = 0; i < question.options.length; i++) {
    const option = document.createElement('li');
    option.innerHTML = "<input type='radio' />" + question.options[i];
    option.addEventListener('click', () => checkAnswer(i)); 
    optionsList.appendChild(option);
  }
}

function checkAnswer(selectedIndex) {
  const question = randomQuestions[currentQuestion];

  if (selectedIndex === question.answer) {
    score++;
  }

  nextButton.style.display = 'block';
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < randomQuestions.length) {
    showQuestion();
    nextButton.style.display = 'none';
  } else {
    endGame();
  }
}

function endGame() {
  questionContainer.style.display = 'none';
  scoreContainer.style.display = 'block';
  scoreText.textContent = score;
  nextButton.style.display = 'none'; 
  leaderboard.style.display = 'none'; 
  addToLeaderboard(username.value, score);
}



//Local storage

function addToLeaderboard(username, score) { 
  localStorage.setItem("questions", JSON.stringify(questions));
  let leaderboard = JSON.parse(localStorage.getItem('leaderboard'));

  if (!leaderboard) {
    leaderboard = [];
  }
  
  leaderboard.push({ username, score });
  localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
  
}


