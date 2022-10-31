const inputs = document.querySelectorAll(".side-input");
const calcBtn = document.querySelector("#calc-btn");
const outputMessage = document.querySelector("#output");

calcBtn.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse(){
    const v1 = inputs[0].value;
    const v2 = inputs[1].value; 
    if (v1&&v2)
    {
        const sumOfSquares = calculateSumOfSquares(Number(v1), Number(v2));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares)
        outputMessage.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
    } else {
        outputMessage.innerText = "Please enter values to calculate."
    }
}

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a**2 + b**2;
    return sumOfSquares; 
}