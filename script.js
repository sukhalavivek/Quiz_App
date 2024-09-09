const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},    
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "India", correct: false},
            { text: "Mongolia", correct: false},
            { text: "Congo", correct: false},    
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Sahara", correct: false},
            { text: "Kalahari", correct: false},
            { text: "Antartica", correct: true},
            { text: "Thar", correct: false},    
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Antartica", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Asia", correct: false},    
        ]
    },
    {
        question: "Which is the most populated country in the world?",
        answers: [
            { text: "China", correct: false},
            { text: "Russia", correct: false},
            { text: "America", correct: false},
            { text: "India", correct: true},    
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score= 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}