alert("JS Loaded");
9const questions = [
  {
    question: "Capital of India?",
    options: ["Mumbai", "Delhi", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5"],
    answer: "4"
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  let q = questions[current];
  document.getElementById("question").innerText = q.question;

  let optionsHTML = "";
  q.options.forEach(opt => {
    optionsHTML += `<button onclick="checkAnswer('${opt}')">${opt}</button>`;
  });

  document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(selected) {
  if (selected === questions[current].answer) {
    score++;
  }
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").innerHTML = "Quiz Completed!";
    document.getElementById("score").innerText = "Score: " + score;
  }
}

loadQuestion();
