const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks Text Mark Language", correct: false },
      { text: "Hyper Tool Multi Language", correct: false }
    ]
  },
  {
    question: "Which language is used for styling?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "Java", correct: false },
      { text: "Python", correct: false }
    ]
  },
  {
    question: "Which is JavaScript framework?",
    answers: [
      { text: "React", correct: true },
      { text: "Django", correct: false },
      { text: "Laravel", correct: false },
      { text: "Flask", correct: false }
    ]
  }
];

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  resetState();
  const q = questions[currentQuestion];
  questionEl.innerText = q.question;

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.addEventListener("click", () => selectAnswer(btn, answer.correct));
    answersEl.appendChild(btn);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  answersEl.innerHTML = "";
}

function selectAnswer(button, correct) {
  const buttons = answersEl.children;

  for (let btn of buttons) {
    btn.disabled = true;
  }

  if (correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }

  // Show correct answer
  questions[currentQuestion].answers.forEach((ans, i) => {
    if (ans.correct) {
      buttons[i].classList.add("correct");
    }
  });

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.innerText = `Your Score: ${score} / ${questions.length}`;
  answersEl.innerHTML = "";

  nextBtn.innerText = "Restart";
  nextBtn.style.display = "block";

  nextBtn.onclick = () => {
    currentQuestion = 0;
    score = 0;
    nextBtn.innerText = "Next";
    showQuestion();
  };
}

showQuestion();