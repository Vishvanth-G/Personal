const questions = [
  {
    question: "Where did we first meet after confession?",
    options: ["Farewell party", "Your place", "Nilgiris"],
    correct: 2
  },
  {
    question: "My Fvrt spot?",
    options: ["Beach", "Where ever together", "Home"],
    correct: 1
  },
  {
    question: "My love",
    options: ["You", "Cristiano", "Both"],
    correct: 1
  }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const finalEl = document.getElementById("final");
const successEl = document.getElementById("success");
const photosEl = document.getElementById("photos");

loadQuestion();

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].correct) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      questionEl.classList.add("hidden");
      optionsEl.classList.add("hidden");
      finalEl.classList.remove("hidden");
    }
  } else {
    alert("Dumbass- Try again!");
  }
}

function sayYes() {
  finalEl.classList.add("hidden");
  successEl.classList.remove("hidden");
  photosEl.classList.remove("hidden");
}

function sayNo() {
  alert("You have no choice other than YES 😜");
}

/* Floating romantic text generator */
const floatingContainer = document.getElementById("floating");

const loveItems = [
  "❤️","❤️","💘","❤️","💕","💓","❤️","💗",
  "Love","♾️","Forever","Always",
  "♾️","My Girl","You",
  "","Us", "♾️"
];

function createFloating() {
  const span = document.createElement("span");
  span.innerText = loveItems[Math.floor(Math.random() * loveItems.length)];

  span.style.left = Math.random() * window.innerWidth + "px";
  span.style.bottom = "-60px";

  span.style.setProperty("--x", (Math.random() * 400 - 200) + "px");
  span.style.setProperty("--y", -(Math.random() * 800 + 400) + "px");

  span.style.fontSize = Math.random() * 18 + 18 + "px";
  span.style.animationDuration = Math.random() * 8 + 10 + "s";

  floatingContainer.appendChild(span);
  setTimeout(() => span.remove(), 18000);
}

setInterval(createFloating, 500);