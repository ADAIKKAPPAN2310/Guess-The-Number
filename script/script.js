'use strict';

let score = 5;
document.querySelector(".score").textContent = score;

let random = Math.floor(Math.random() * 10);

document.querySelector(".check").addEventListener("click", function () {
    let value = Number(document.querySelector(".guess").value);

    if (!value) {
        document.querySelector(".message").textContent = "No value";
    }
    else {
        if (value === random) {
            document.querySelector(".message").textContent = "Correct number!";
            document.querySelector("body").style.backgroundColor = "green";
        }
        else if (value < random) {
            if (score > 1) {
                document.querySelector(".message").textContent = "Too Low";
                score--;
                document.querySelector(".score").textContent = score;
            }
            else {
                document.querySelector(".score").textContent = 0;
                document.querySelector(".message").textContent = "Gameover";
            }
        }
        else if (value > random) {
            if (score > 1) {
                document.querySelector(".message").textContent = "Too High";
                score--;
                document.querySelector(".score").textContent = score;
            }
            else {
                document.querySelector(".score").textContent = 0;
                document.querySelector(".message").textContent = "Gameover";
            }

        }
    }
});

//Again button
document.querySelector(".again").addEventListener("click",function(){
    score=5;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "black";
});