#! /user/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Display a colourful message 
console.log(chalk.bold.cyanBright("\n \t\t Welcome M Ahmed Gujjar"));
console.log("-".repeat(50));
// prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
//  Triming the sentence spiliting it into words based on -space-
let words = answers.sentence.trim().split(" ");
// Analysis of user input sentence 
console.log("=".repeat(50));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("-".repeat(50));
