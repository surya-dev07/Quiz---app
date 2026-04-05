const questions = [
  {
    question: "Capital of India?",
    options: ["Mumbai", "Delhi", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5"],
    answer: "4"
  },
  {
    question: "Sun rises from?",
    options: ["West", "East", "North"],
    answer: "East"
  }
];

let current = 0;
let score = 0;
let answered = false;

function loadQuestion() {
  answered = false;

  let q = questions[current];
  document.getElementById("question").innerText = q.question;

  let optionsHTML = "";
  q.options.forEach(opt => {
    optionsHTML += `<button onclick="checkAnswer('${opt}')">${opt}</button>`;
  });

  document.getElementById("options").innerHTML = optionsHTML;
  document.getElementById("score").innerText = "";
}

function checkAnswer(selected) {
  if (answered) return;

  answered = true;

  let correct = questions[current].answer;

  if (selected === correct) {
    score++;
    document.getElementById("score").innerText = "✅ Correct!";
  } else
