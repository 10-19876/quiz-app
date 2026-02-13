// Quiz Questions
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "Who wrote 'Harry Potter'?",
        options: ["J.K. Rowling", "Mark Twain", "Roald Dahl", "Charles Dickens"],
        answer: "J.K. Rowling"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

// Load Question
function loadQuestion() {
    // Clear previous options
    optionsEl.innerHTML = "";

    let q = quizData[currentQuestion];
    questionEl.innerText = q.question;

    q.options.forEach(option => {
        const li = document.createElement("li");
        li.innerText = option;
        li.onclick = selectOption;
        optionsEl.appendChild(li);
    });
}

// Option Click Handler
function selectOption() {
    if(this.innerText === quizData[currentQuestion].answer) {
        score++;
        this.style.background = "#4caf50"; // green
    } else {
        this.style.background = "#f44336"; // red
    }

    // Disable all options after selection
    Array.from(optionsEl.children).forEach(li => {
        li.onclick = null;
    });
}

// Next Button
nextBtn.onclick = function() {
    currentQuestion++;
    if(currentQuestion < quizData.length) {
        loadQuestion();
        scoreEl.innerText = "";
    } else {
        questionEl.innerText = "Quiz Completed!";
        optionsEl.innerHTML = "";
        nextBtn.style.display = "none";
        scoreEl.innerText = "Your Score: " + score + "/" + quizData.length;
    }
};

// Initial Load
loadQuestion();
