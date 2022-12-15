import readlineSync from 'readline-sync';

export const showGreetings = () => {
  console.log('Welcome to the Brain Games!');
};

export const showCongrats = (name) => {
  console.log(`Congratulations, ${name}`);
};

export const showRules = (rules) => {
  console.log(rules);
};

export const showWrong = (name, userAnswer, correctAnswer) => {
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
};

export const showCorrect = () => {
  console.log('Correct!');
};

export const showQuestion = (question) => {
  console.log('Question: ', question);
};

export const askForUserAnswer = () => readlineSync.question('Your answer: ');

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
