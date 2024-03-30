#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 20000; //Dollar
let myPinCode = 1234;

let pinAnswer = await inquirer.prompt({
  name: "pin",
  type: "number",
  message: "Enter your pin number?",
});

if (pinAnswer.pin == myPinCode) {
  console.log("Correct Pin Code");
  let operationAns = await inquirer.prompt({
    name: "operation",
    type: "list",
    message: "Please Select Option.",
    choices: [
      "withdraw cash",
      "Fast Cash",
      "Balance Inquiry",
      "Deposit Amount",
      "Transfer Money",
    ],
  });
  if (operationAns.operation == "withdraw cash") {
    let amountAns1 = await inquirer.prompt({
      name: "amount",
      type: "number",
      message: "Enter your amount",
    });
    if (amountAns1.amount > myBalance) {
      console.log(`Insufficient Balance`);
    } else {
      myBalance -= amountAns1.amount;
      console.log(`You remaining Balance is: ${myBalance}`);
    }
  } else if (operationAns.operation == "Fast Cash") {
    let selectAmount = await inquirer.prompt({
      name: "select",
      type: "list",
      message: "Select one amount",
      choices: ["2000", "5000", "10000", "15000", "20000"],
    });
    if (selectAmount.select == "2000") {
      console.log(`Your new balance is ${(myBalance -= 2000)}`);
    } else if (selectAmount.select == "5000") {
      console.log(`Your new balance is ${(myBalance -= 5000)}`);
    } else if (selectAmount.select == "10000") {
      console.log(`Your new balance is ${(myBalance -= 10000)}`);
    } else if (selectAmount.select == "15000") {
      console.log(`Your new balance is ${(myBalance -= 15000)}`);
    } else if (selectAmount.select == "20000") {
      console.log(`Your new balance is ${(myBalance -= 20000)}`);
    }
  } else if (operationAns.operation == "Balance Inquiry") {
    console.log(`Your Current Balance is: ${myBalance}`);
  } else if (operationAns.operation == "Deposit Amount") {
    let amountAnsr2 = await inquirer.prompt({
      name: "amount",
      type: "number",
      message: "Enter Amount",
    });
    if ((myBalance += amountAnsr2.amount)) {
      console.log(`Your new Balance is: ${myBalance}`);
    }
  } else if (operationAns.operation == "Transfer Money") {
    let amountAns3 = await inquirer.prompt([
      { name: "accountnum", type: "number", message: "Write account number" },
      { name: "amount", type: "number", message: "Enter Amount" },
    ]);
    if (amountAns3.amount >= myBalance) {
      console.log("Sorry you have insufficient Balance.");
    } else if ((myBalance -= amountAns3.amount)) {
      console.log(
        `Your amount has been transfered successfully and your new Balance is ${myBalance}`
      );
    }
  }
} else {
  console.log("Invalid Pin Code.");
}
