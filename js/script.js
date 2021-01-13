let numOfLose = 0;
let container = document.querySelector(".container");

for (i = 0; i < 3; i++) {
    let correct_ans = Math.floor(Math.random() * 10) + 1;

    let guessNumber = parseInt(prompt("Enter a number between 1 to 10"));
    if (correct_ans == guessNumber) {
        alert("You won!");
        container.innerHTML = `<h1 class="jumbotron">You won!</h1>`;
        break;
    } else if (guessNumber > 10) {
        alert("Invalid number!");
        break;
    } else if(correct_ans > guessNumber) {
        alert("Correct answer is smaller!")
        numOfLose = numOfLose + 1;
    } else if(correct_ans < guessNumber) {
        alert("Correct answer is greater!");
        numOfLose = numOfLose + 1;
    } else {
        alert("Invalid number!")
    }
}

if (numOfLose == 3) {
    alert("You lose!")
    container.innerHTML = `<h1 class="jumbotron">You lose!</h1>`;
}