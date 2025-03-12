'use strict';

let score = 7;
let highScore = 0;
let isPlaying = true;
document.querySelector(".score").textContent = score;

let random = Math.floor(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
    if (isPlaying) {
        let value = Number(document.querySelector(".guess").value);

        if (!value) {
            document.querySelector(".message").textContent = "No value";
        }
        else {
            if (value === random) {
                document.querySelector(".message").textContent = "Correct number!";
                document.querySelector("body").style.backgroundColor = "green";
                document.querySelector(".number").textContent = random;
                if (highScore < score) {
                    highScore = score;
                    document.querySelector(".highscore").textContent = highScore;
                }
                isPlaying = false;
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
    }
});

//Again button
document.querySelector(".again").addEventListener("click", function () {
    score = 7;
    isPlaying = true;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    random = Math.floor(Math.random() * 20) + 1;
});