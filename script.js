let decreseButton = document.getElementById("decrease");
let resetButton = document.getElementById("reset");
let increaseButton = document.getElementById("increase");

let countText = document.getElementById("value");

let count = 0;
decreseButton.addEventListener("click", () => {
    count = count-1
    countText.textContent = count
})

resetButton.addEventListener("click", () => {
    count = 0
    countText.textContent = count
})
increaseButton.addEventListener("click", () => {
    count = count+1
    countText.textContent = count
})
