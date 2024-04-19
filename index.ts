#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

//colorfull welcome message;

console.log(chalk.bold.cyanBright("\n\t Code Sabeen-Word Counter"));
console.log("=".repeat(60));

// prompt the user to enter a sentence;

let answer = await inquirer.prompt([{
name: "sentence",
type: "input",
message: "Enter a sentence",

}]);

//triming the extra spaces if given by user , and spliting it into words based on spaces;
let words = answer.sentence.trim().split(" ");

//Analysis of user input sentence;

console.log("=".repeat(60));
console.log(chalk.bold("_ Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.redBright(words.length)}`));

console.log("=".repeat(60));