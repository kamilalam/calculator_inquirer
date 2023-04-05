#!/usr/bin/env node
import promptSync from "prompt-sync";
const prompt = promptSync();
//let myName = prompt("jkwlkjkb")
import inquirer from "inquirer";
import chalk from "chalk";
//  function start() {
//     const header = chalkAnimation.rainbow("Let's Start Calculation");
//     setTimeout(()=>{
//       header.start()
//     },3000)
//     setTimeout(()=>{
//       header.stop()
//     },1000);
// }
//  await start()
async function calculatorInput() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "operation",
            message: "Which operation you want to perform?\n",
            choices: ["Subtraction", "Addition", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: chalk.green("enter a number")
        },
        { type: "number",
            name: "num2",
            message: chalk.green("enter a number") }
    ])
        .then((answers) => {
        if (answers.operation == "Subtraction") {
            console.log(`${chalk.yellow(answers.num1)}-${chalk.yellow(answers.num2)}=${answers.num1 - answers.num2}`);
        }
        else if (answers.operation == "Addition") {
            console.log(`${chalk.yellow(answers.num1)}+${chalk.yellow(answers.num2)}=${answers.num1 + answers.num2}`);
        }
        else if (answers.operation == "Multiplication") {
            console.log(`${chalk.yellow(answers.num1)}*${chalk.yellow(answers.num2)}=${answers.num1 * answers.num2}`);
        }
        else if (answers.operation == "Division") {
            console.log(`${chalk.yellow(answers.num1)}/${chalk.yellow(answers.num2)}=${answers.num1 / answers.num2}`);
        }
    });
}
calculatorInput();
