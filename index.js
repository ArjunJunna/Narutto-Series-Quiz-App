//Acquiring readline-sync package
var chalk = require('chalk');
var readlineSync = require('readline-sync');
console.log(chalk.bgCyanBright('\tWELCOME'));
console.log('\n');
var userName = readlineSync.question(
  chalk.bold.cyan("What's your good name? ")
);
console.log('\n');
console.log(
  chalk.bold.cyan(
    'Hey ' + userName + '. Do you think you know Narutto series? '
  )
);
console.log('\n');
var score = 0;
//Playtime function
function playtime(question, answer) {
  var userAnswer = readlineSync.question(chalk.bold.bgMagenta(question));
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgGreenBright('Correct'));
    score = score + 1;
  } else {
    console.log(chalk.bgRed('Wrong'));
    console.log(chalk.bold.greenBright('Correct answer is: ' + answer));
    score = score - 1;
  }
  console.log(chalk.bold.magenta('Current score: ' + score));
  console.log('--------------------');
}
//Array of objects
var questions = [
  {
    question: "Who is Narutto's father?",
    answer: 'Minato',
  },
  {
    question: "What is Narutto's style of chakra?",
    answer: 'Wind',
  },
  {
    question: "Who is Narutto's best friend?",
    answer: 'Sasuke',
  },
  {
    question: 'Who is the first Hokage of leaf village?',
    answer: 'Hashirama',
  },
  {
    question: "What is Sasuke's clan name?",
    answer: 'Uchiha',
  },
];
//Loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  playtime(currentQuestion.question, currentQuestion.answer);
}
console.log(chalk.bold.green('Your final score: ' + score));
