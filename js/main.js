const grid = document.getElementById("grid");
const selection = document.getElementById("selection");
const btn = document.getElementById("btn-play");

btn.addEventListener("click", function() {
    if (selection.value === "Easy") {
        for (let i = 1; i <= 100; i++) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("square-easy");
            grid.appendChild(squareDiv);
            squareDiv.addEventListener("click", function() {
                squareDiv.classList.toggle("clicked");
            });
        }
    } else if (selection.value === "Medium") {
        for (let i = 1; i <= 81; i++) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("square-medium");
            grid.appendChild(squareDiv);
            squareDiv.addEventListener("click", function() {
                squareDiv.classList.toggle("clicked");
            });
        }
    } else {
        for (let i = 1; i <= 49; i++) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("square-hard");
            grid.appendChild(squareDiv);
            squareDiv.addEventListener("click", function() {
                squareDiv.classList.toggle("clicked");
            });
        }
    }
})