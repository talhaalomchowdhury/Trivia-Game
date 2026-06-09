// ================= PHASE 3: DATA & STATE =================
const questions = [
  {
    text: "Who invented the World Wide Web?",
    answers: ["Tim Berners-Lee", "Bill Gates", "Linus Torvalds", "Ada Lovelace"],
    correct: 0
  },
  {
    text: "Which programming language is known as the 'backbone of web development'?",
    answers: ["Python", "C++", "JavaScript", "SQL"],
    correct: 2
  },
  {
    text: "What does DOM stand for in web development?",
    answers: ["Data Object Model", "Document Object Model", "Digital Order Management", "Document Operation Matrix"],
    correct: 1
  },
  {
    text: "Which HTML element is used to link an external JavaScript file?",
    answers: ["<link>", "<script>", "<js>", "<javascript>"],
    correct: 1
  },
  {
    text: "What does CSS stand for?",
    answers: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    correct: 2
  }
];

let currentIndex = 0;
let score = 0;
function loadQuestion(index) {
  // 1. Get the current question object out of the questions array using index
  const currentQuestion = questions[index];
}

const gameTitle = document.getElementById("game-title")
const scoreDisplay = document.getElementById("score")
const questionNumber = document.getElementById("question-number")
const questionText = document.getElementById("question-text")
const questionCard = document.getElementById("question-card")
const answerList = document.getElementById("answer-list")
const nextBtn = document.getElementById("next-btn")
const endScreen = document.getElementById("end-screen")

const answerBtnsCollection = document.getElementsByClassName("answer-btn");
const answerBtnsNodeList = document.querySelectorAll(".answer-btn");
// getElementsByClassName returns an HTMLCollection.
// querySelectorAll returns a NodeList.
// To use .map() on either, convert with Array.from().
// HTMLCollection: This is a live collection of elements. It is an older feature of the browser DOM and only has a few basic properties (like .length). It completely lacks modern array loop methods like .forEach() or .map().
// NodeList: This is a more modern collection returned by querySelectorAll. While it isn't a true array either, the creators of JavaScript built the .forEach() method directly into it as a convenience so you can loop through elements easily.
// Array.from(): Since neither of them is a real JavaScript array, they don't have access to powerful array transformations like .map() or .filter(). Wrapping either collection in Array.from() copies the elements into a brand new, genuine array so you can use every single array method available.
gameTitle.textContent = "⚡ Quick Fire Trivia";
console.log("First question:", questionText.textContent);
questionNumber.textContent = questionNumber.textContent.toUpperCase();

const firstBtn = answerBtnsNodeList[0];
const firstLi = firstBtn.parentElement;

console.log("The first button:", firstBtn);
console.log("Its parent <li>:", firstLi);
console.log("The <ul> that holds all buttons:", firstLi.parentElement);

questionCard.classList.add("answered")
// Look at the browser — does the card look different?

questionCard.classList.remove("answered")
// Back to normal