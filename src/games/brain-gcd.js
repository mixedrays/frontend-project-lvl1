import readlineSync from 'readline-sync';
import { getGCD, getRandomNumber } from '../index.js';

export const showRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

export const askQuestion = (name) => {
  const questionNumber1 = getRandomNumber();
  const questionNumber2 = getRandomNumber();

  console.log('Question: ', `${questionNumber1} ${questionNumber2}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = String(getGCD(questionNumber1, questionNumber2));

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${name}!`);
  return false;
};
