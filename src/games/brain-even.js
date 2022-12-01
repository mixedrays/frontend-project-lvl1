import readlineSync from 'readline-sync';
import { getRandomNumber, isEven } from '../index.js';

export const showRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const askQuestion = (name) => {
  const questionNumber = getRandomNumber();
  console.log('Question: ', questionNumber);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${name}!`);
  return false;
};
