const readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question("What's your name? \n");
console.log(chalk.yellow.inverse.bold("\nWelcome! "+userName+", Let's begin the 'THE BIG BANG THEORY' quiz.\n"));

console.log(chalk.magenta.bold("NOTE: please write the answer in same format as options.\n\n"));

var score = 0;
var quiz = [
  {
    question: "What does Sheldon say always after doing prank/joke?",
    options: "(i) Yay!  (ii) Bazinga!  (iii) Told ya!",
    answer: "Bazinga!"
  },
  {
    question: "What was the name of Sheldon's show?",
    options: "(i) The Sheldon show  (ii) Fun with Sheldon  (iii) Fun with Flags",
    answer: "Fun with Flags"
  },
  {
    question: "To whom Sheldon admire as a scientist?",
    options: "(i) Faraday  (ii) Newton  (iii) Einstein",
    answer: "Faraday"
  },
  {
    question: "Who was the owner of comic book store?",
    options: "(i) Josh  (ii) Jack  (iii) Stuart",
    answer: "Stuart"
  },
  {
    question: "What does Sheldon's grandma call him?",
    options: "(i) Moon pie  (ii) Shelly  (iii) Smarty",
    answer: "Moon pie"
  }
]

function askQuestion(ques, options, ans){
  console.log(chalk.blue.bold(ques));
  console.log(chalk.white.bgBlue(options));
  var response = readlineSync.question("Your answer - ");
  if(ans === response){
    console.log(chalk.green.bold("You are right!"));
    score = score+1;
  }
  else{
    console.log(chalk.red.bold("Sorry! wrong asnwer"));
  }
  console.log(chalk.cyan.bold("Your current score: "+score));
}

for(var i=0; i<quiz.length; i++){
  askQuestion(quiz[i].question, quiz[i].options, quiz[i].answer);
  console.log(chalk.white.bold("----------------------------------------\n"));
}

console.log(chalk.yellow.bold("Your final score: "+score+"/5"));

if(score === 5){
  console.log(chalk.green.bold.underline("You know everything. You are true 'THE BIG BANG THEORY' fan!!!"));
}
else{
  console.log(chalk.red.bold.underline("Go and watch the show again."));
}
