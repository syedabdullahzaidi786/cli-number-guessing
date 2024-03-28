#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a rendom number..

// 2) User input for guessing number....

// 3)  Computer user input with computer generated number and show result...


const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);

const answers = await inquirer.prompt([
    {
       name: "userGuessednumber",
       type: "number", 
       message: "Please guess a number between 1-6:",
    },
]);

if(answers.userGuessednumber === randomNumber ){
    console.log("Congtratulation! you guessed right number.");
}
else{
    console.log("you guessed wrong number.");
}