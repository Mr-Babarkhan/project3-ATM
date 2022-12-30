import inquirer from "inquirer";



let input = await inquirer.prompt([
    {
        name: "userID",
        type: "string",
        message: "kindly enter your user ID"
    },
    {
        name: "userPIN",
        type: "number",
        message: "kindly enter your PIN",
        when(answers) {
            return answers.userID;
        },
    },
    {
        name: "AccountType",
        type: "list",
        choices: ["Saving account", "current account"],
        message: "choose your account type",
        when(answers) {
            return answers.userPIN;
        },
    },
    {
        name: "options",
        type: "list",
        choices: ["Fast Cash", "Balance inquiry", "Cash withdraw"],
        message: "choose given below",
        when(answers) {
            return answers.AccountType;
        },
    },
    {
        name: "cashamount",
        type: "list",
        choices: [1000, 2000, 5000, 10000],
        message: "choose given below",
        when(answers) {
            return answers.options === "Fast Cash";
        },
    },
    {
        name: "cashamount",
        type: "number",
        message: "Enter amount",
        when(answers) {
            return answers.options === "Cash withdraw";
        },
    }
]);
const { userID, userPIN, AccountType, options, cashamount } = input;
const balance = Math.floor(Math.random() * 10000);
if (userID && userPIN && cashamount) {
    console.log("Your total balance " + balance);
    if (balance > cashamount) {
        let currentBalance = balance - cashamount;
        console.log(`Transaction Successfull . \n Your Current Balance is ${currentBalance}`);
    }
    else {
        console.log("insufficient Balance");
    }
}
