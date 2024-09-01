const questions = [
   {
      question: "What is your name?",
      choices: ["Hamid khan", "Farid khan", "Asmat khan", "Naeem khan"],
      answer: 2,
   },
   {
      question: "Apka sabse acha bacha kon he?",
      choices: ["Junaid", "Sajid", "Eman", "Furqan"],
      answer: 1,
   },
   {
      question: "Tamte kon he?",
      choices: ["Eman", "Junaid", "Sajid", "Furqan"],
      answer: 3,
   },
   {
      question: "Manani kon he'?",
      choices: ["Asmat khan ya Za haha", "eman", "furqan", "junaid"],
      answer: 0,
   },
   {
      question: "what is your father name?",
      choices: ["sher ajam", "non", "gull nazar", "kamal"],
      answer: 2,
   },
   {
      question: "basraki kon he?",
      choices: ["junaid", "sajid", "furqan", "eman"],
      answer: 3,
   },
   {
      question: "Vasvai kon he?",
      choices: ["eman", "furqan", "Asmat", "junaid"],
      answer: 2,
   },
   {
      question: "tovaveniye sok do?",
      choices: ["eman", "junaid", "sajid", "furqan"],
      answer: 0,
   },
   {
      question: "gar me sabse acha kon he?",
      choices: ["eman", "Sajid", "furqan", "junaid"],
      answer: 1,
   },
   {
      question: "Sab me Sajid ka option sahi he hahahaha?",
      choices: ["ye click karo", "haha", "haha", "haha"],
      answer: 0,
   },
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quizContainer");
const scoreElement = document.getElementById("score");
const nextQuestionButton = document.getElementById("nextQuestion");

function loadQuestion() {
   quizContainer.innerHTML = ""; // Clear previous question
   const currentQuestion = questions[currentQuestionIndex];

   // Create and append the question element
   const questionElement = document.createElement("p");
   questionElement.textContent = currentQuestion.question;
   quizContainer.appendChild(questionElement);

   // Create and append the answer buttons
   currentQuestion.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.classList.add("answer");
      button.dataset.index = index;
      button.textContent = choice;
      button.addEventListener("click", handleAnswerClick);
      quizContainer.appendChild(button);
   });
}

function handleAnswerClick(event) {
   const index = parseInt(event.target.dataset.index);
   const correctIndex = questions[currentQuestionIndex].answer;

   // Check if the clicked answer is correct
   if (index === correctIndex) {
      event.target.classList.add("correct");
      score++;
      scoreElement.textContent = `Score: ${score}`;
   } else {
      event.target.classList.add("incorrect");
   }

   // Disable further clicks on the current question
   document.querySelectorAll(".answer").forEach((button) => {
      button.removeEventListener("click", handleAnswerClick);
   });
}

function handleNextQuestion() {
   currentQuestionIndex++;
   if (currentQuestionIndex < questions.length) {
      loadQuestion();
   } else {
      quizContainer.innerHTML = `Game Over! Your final score is ${score}.`;
      nextQuestionButton.textContent = "Play Again";
      nextQuestionButton.addEventListener("click", () => {
         location.reload();
      });
   }
}

nextQuestionButton.addEventListener("click", handleNextQuestion);

// Load the first question
loadQuestion();
