const container = document.querySelector(".container");

const dimButton = document.querySelector("#dim");

const redBtn = document.querySelector("#red");

const blueBtn = document.querySelector("#blue");

const greenBtn = document.querySelector("#green");

const randBtn = document.querySelector("#random");

let currentColor = 'red';

redBtn.addEventListener("click", () => currentColor = 'red');
greenBtn.addEventListener("click", () => currentColor = 'green');
blueBtn.addEventListener("click", () => currentColor = 'blue');
randBtn.addEventListener("click", () => currentColor = 'random');


function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

dimButton.addEventListener("click", function dimension() {
    const num = prompt("Enter the required dimension (1-100): ");
    if (isNaN(num) || num<1 || num>100) return;

    container.textContent = "";

    const cellSize = 640/num;

    for (let i = 0; i < num*num; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${cellSize}px`;
    box.style.height = `${cellSize}px`;
    
    box.style.opacity = 0;
    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = currentColor === 'random' ? getRandomColor() : currentColor;
        let currentOpacity = Number(box.style.opacity);
        if (currentOpacity < 1) {
            box.style.opacity = currentOpacity + 0.1
        }
    });
    
    container.appendChild(box);
    }
});



