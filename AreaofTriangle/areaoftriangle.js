const inputs = document.querySelectorAll(".side-input");
const calcBtn = document.querySelector("#calc-btn");
const outputMessage = document.querySelector("#output");

calcBtn.addEventListener("click", calculateAreaOfTriangle);

function calculateAreaOfTriangle() {
    const base = Number(inputs[0].value);
    const height = Number(inputs[1].value);
    if (base&&height) {
        const baseHeight = calculateBaseHeight(base, height);
        const areaOfTriangle = baseHeight/2;
        outputMessage.innerText = "The area of the triangle is " + areaOfTriangle + "cm";
    } else {
        outputMessage.innerText = "Please input values to calculate."
    }
}

function calculateBaseHeight(b, h) {
    const baseHeight = b*h;
    return baseHeight;
}