'use strict';

const answerBox = document.querySelector(".number");
const message = document.querySelector(".message");
const currentScore = document.querySelector(".score");
const topScore = document.querySelector(".highscore");
const inputBox = document.querySelector(".guess");
const body = document.querySelector("body");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");

let score = 7;
let highScore = 0;
let isPlaying = true;
currentScore.textContent = score;

let random = Math.floor(Math.random() * 20) + 1;

btnCheck.addEventListener("click", function () {
    if (isPlaying) {
        let value = Number(inputBox.value);

        if (!value) {
            message.textContent = "No value";
        }
        else {
            if (value === random) {
                message.textContent = "Correct number!";
                body.style.backgroundColor = "green";
                answerBox.textContent = random;
                answerBox.style.color = "green";
                if (highScore < score) {
                    highScore = score;
                    topScore.textContent = highScore;
                }
                isPlaying = false;
            }
            else if (value < random) {
                if (score > 1) {
                    message.textContent = "Too Low";
                    score--;
                    currentScore.textContent = score;
                }
                else {
                    currentScore.textContent = 0;
                    message.textContent = "Gameover";
                }
            }
            else if (value > random) {
                if (score > 1) {
                    message.textContent = "Too High";
                    score--;
                    currentScore.textContent = score;
                }
                else {
                    currentScore.textContent = 0;
                    message.textContent = "Gameover";
                }

            }
        }
    }
});

//Again button
btnAgain.addEventListener("click", function () {
    score = 7;
    isPlaying = true;
    currentScore.textContent = score;
    message.textContent = "Start guessing...";
    inputBox.value = "";
    body.style.backgroundColor = "#222";
    answerBox.textContent = "?";
    random = Math.floor(Math.random() * 20) + 1;
    answerBox.style.color = "";
});