//TODO - Install node.js

//TODO - Install Readline
const readlineSync = require('readline-sync');

const questions = [
    {//NOTE - Index 0
        question: "What is 2 + 2?",
        options: ["2", "3", "4", "5"],
        answer: "4"
    },
    {//NOTE - Index 1
        question: "What is the capitol of New Zealand?",
        options: ["Auckland", "Wellington", "Nelson", "Christchurch"],
        answer: "Wellington"
    }
    //TODO - Add more questions here:
];

//NOTE - declares quiz function
function quiz() {
    let score = 0;

    //NOTE - iterates through questions
    questions.forEach((q, index) => {
        console.log(`Question ${index + 1}: ${q.question}`); //NOTE - Displayes question number and answer
        q.options.forEach((option, i) => {
            console.log(`${i + 1}. ${option}`);//NOTE - Displays question options
        })

        //TODO - Request User input via readline
        let userAnswer = readlineSync.question('Your answer (number): ');
        let answerIndex = parseInt(userAnswer, 10) - 1;

        if (answerIndex < 0 || answerIndex > q.options.length) { //NOTE - || = or
            console.log(`Please select an option from 1 to ${q.options.length}`);
        } else if (q.options[answerIndex] === q.answer) { //NOTE - === = first thing has to be exactly what the second thing is
            console.log("Correct!");
            score++; //NOTE - ++ = upgrades variable by 1
        } else {
            console.log("Wrong!")
        }
    })
    console.log(`your final score is: ${score}/${questions.length}`);
};

quiz();