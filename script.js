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
//  CORRECT RENDERING FUNCTION
function loadQuestion(index) {
  const currentQuestion = questions[index];

  // 1. Update text displays dynamically
  questionNumber.textContent = `QUESTION ${index + 1} OF ${questions.length}`;
  questionText.textContent = currentQuestion.text;

  // 2. Loop over buttons to inject array text and keep custom styles intact
  const btnsArray = Array.from(answerBtnsNodeList);
  btnsArray.forEach((button, i) => {
    button.textContent = currentQuestion.answers[i];
    button.className = "answer-btn"; // Keeps button base design while wiping old colors
  });

  // 3. Reset utility classes for the next slide loop
  nextBtn.classList.add("hidden");
  questionCard.classList.remove("answered");
}

//PHASE 4: 

answerList.addEventListener("click", (event) => {
    // 1. Safety Guard: Stop if the click wasn't on a button
    const clickedBtn = event.target;
    if (clickedBtn.tagName !== "BUTTON") return;

    // 2. Find the index number of the clicked button
    const btnsArray = Array.from(answerBtnsNodeList);
    const selectedIndex = btnsArray.indexOf(clickedBtn);

    // 3. Get the correct answer index for the current question
    const correctAnswerIndex = questions[currentIndex].correct;

    // 4. Win/Lose Logic: Check if the answer is correct
    if (selectedIndex === correctAnswerIndex) {
        clickedBtn.classList.add("correct"); // Turn button green
        score++;                             // Increase score count
        scoreDisplay.textContent = score;    // Update score on screen
    } else {
        clickedBtn.classList.add("wrong");   // Turn clicked button red
        btnsArray[correctAnswerIndex].classList.add("correct"); // Reveal correct button in green
    }

    // 5. Freeze the game so no more clicks can be made
    btnsArray.forEach(button => {
        button.classList.add("disabled");
    });

    // 6. Reveal the "Next Question" button and lock the card layout
    questionCard.classList.add("answered");
    nextBtn.classList.remove("hidden");
});

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
// to kick off the game
loadQuestion(0);