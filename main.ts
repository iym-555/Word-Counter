#! /usr/bin/env node

import inquirer from "inquirer";
let answers: {
    Sentence: string
} 
let userAns = await inquirer.prompt(
    [
        {
            name: "Sentence",
            type: "input",
            message: "Enter your sentence to count words"
        }
    ]
)
let words = userAns.Sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);