#! /usr/bin/env node
import inquirer from "inquirer";

interface answers {
    from: "PKR" | "USD" | "Pounds" | "Euro",
    to: "PKR" | "USD" | "Pounds" | "Euro",
    amount: number
}

let answer: answers = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["PKR", "USD", "Pounds", "Euro"],
        message: "Select Your Currency:"
    },
    {
        name: "to",
        type: "list",
        choices: ["PKR", "USD", "Pounds", "Euro"],
        message: "Select Your Conversion Currency:"
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Conversion Amount:"
    },
]);


let conversions = {
    "PKR":{
        "USD": 0.0036,
        "Pounds": 0.0029,
        "Euro": 0.0033,
        "PKR": 1
    },
    "USD":{
        "USD": 1,
        "Pounds": 0.79,
        "Euro": 0.92,
        "PKR": 278.25
    },
    "Pounds":{
        "USD": 1.26,
        "Pounds": 1,
        "Euro": 1.16,
        "PKR": 350.62
    },
    "Euro":{
        "USD": 1.09,
        "Pounds": 0.86,
        "Euro": 1,
        "PKR": 302.25
    },
}

const {from, to, amount} = answer;

if(from && to && amount){
    let result = conversions[from][to] * amount;
    console.log(`Your Conversion from ${from} to ${to} is : ${result}`);
}
else{
    console.log("Please Fill All Fields!");
}
