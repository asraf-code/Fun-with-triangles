const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const outputMessage = document.querySelector("#output");

const correctAnswers = ["90", "right angled", "Acute", "Equilateral", "both", "180 degree", "50,60,40", "centroid", "circumcenter", "12"];

submitBtn.addEventListener("click", calculateScore);

function calculateScore() {
    let score = 0;
    
    const formResults = new FormData(quizForm);
    for (let i of formResults) {
        const questionNumber = Number(i[0]);
        if (i[1] === correctAnswers[questionNumber]) {
            score = score + 1;
            console.log(i)
        }
    }

    outputMessage.innerText = "Your score is " + score;

}