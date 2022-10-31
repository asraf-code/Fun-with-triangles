const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#isTriangle-btn");
const outputMessage = document.querySelector("#output");

isTriangleBtn.addEventListener("click", isTriangle)

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        outputMessage.innerText = "Yay, the angles form a triangle!"
    } else {
        outputMessage.innerText = "Oh no! The given angles do not form a triangle."
    }
}

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

