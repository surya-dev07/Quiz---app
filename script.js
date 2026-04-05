const questions = [
  {
    question: "Capital of India?",
    options: ["Mumbai", "Delhi", "Chennai"],
    answer: "Delhi"
  }
];

let current = 0;

function loadQuestion() {
  document.getElementById("question").innerText = questions[current].question;

  let optionsHTML = "";
  questions[current].options.forEach(opt => {
    optionsHTML += `<button onclick="checkAnswer('${opt}')">${opt}</button>`;
  });

  document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(ans) {
  alert("You selected: " + ans);
}

function nextQuestion() {
  alert("Next clicked");
}

loadQuestion();
