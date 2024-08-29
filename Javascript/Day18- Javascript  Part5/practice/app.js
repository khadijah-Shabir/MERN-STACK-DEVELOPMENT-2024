let max = prompt("Enter a max number please");
let random = Math.floor(Math.random() * max) + 1;
console.log(guess);
let guess = prompt("Guess a number");

while (true) {
    if (guess =="quit") {
        console.log("Thanks for playing!");
        break;
    }else if(guess == random) {
        alert("Congrats, you guessed it right!, Random number was", random);
        break;
    }else if(guess<random) {
        guess=prompt("Hint: Too low, try again.");
    }else {
        guess=prompt("Hint: Too high, try again.");
    }
}

