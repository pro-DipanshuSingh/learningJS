let marks = [12 , 45, 67, 89, 90];
console.log(marks[0]);
length = marks.length;
console.log(length);
 

//Print all even numbers from 0 to 100.
/*let numbers = [];
for (let i=0; i<=100; i++){
    if (i%2==0){
        numbers.push(i);
    }
    console.log(numbers);
}*/
//Create a game where you start with any random game number. Ask the user to keep
//guessing the game number until the user enters correct value.
const prompt = require('prompt-sync')();

let gameNumber = Math.floor(Math.random() * 100) +1;
console.log("welcome to the game! Guess the number between 1 to 100");
console.log(" guess the number");
let userguess;
while (userguess != gameNumber) {
    userguess = Number(prompt("enter your guess:"));
    if (userguess == gameNumber){
        console.log("congratulations! you guessed the number correctly.");
    } else if (userguess < gameNumber){
        console.log("too low! try again.");
    } else {
        console.log("too close, try again");
    }

}  