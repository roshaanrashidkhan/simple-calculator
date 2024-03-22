#! /usr/bin/env node
// The above path is known as shabang which is used to make it available to anyone within the same network

import inquirer from "inquirer";

const calculator = await inquirer.prompt([ 
  { message: "Enter a First Number:", type: "number", name: "firstNumber" },
  { message: "Enter a Second Number:", type: "number", name: "secondNumber" },
  {
    message: "Select one of the following operators to perform operations:",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponentiation", "Modulus"],
  },
]);

if (calculator.operator === "Addition") {
    console.log("Your value is:", calculator.firstNumber + calculator.secondNumber)
}
else if (calculator.operator === "Subtraction") {
    console.log("Your value is:", calculator.firstNumber - calculator.secondNumber)
}
else if (calculator.operator === "Multiplication") {
    console.log("Your value is:", calculator.firstNumber * calculator.secondNumber)
}
else if (calculator.operator === "Division") {
    console.log("Your value is:", calculator.firstNumber / calculator.secondNumber)
}
else if (calculator.operator === "Exponentiation") {
    console.log("Your value is:", calculator.firstNumber ** calculator.secondNumber)
}
else if (calculator.operator === "Modulus") {
    console.log("Your value is:", calculator.firstNumber % calculator.secondNumber)
}
else {
    console.log("Please select a valid operator")
}

console.log("THE END.....")