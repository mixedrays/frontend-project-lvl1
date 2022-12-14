import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

export const showRules = () => {
  console.log('What number is missing in the progression?');
};

export const askQuestion = (name) => {
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(1, 15);
  const progressionFirst = getRandomNumber(0, 50);
  const hiddenPosition = getRandomNumber(0, progressionLength);
  const progression = Array(progressionLength).fill(0)
    .map((_, index) => progressionFirst + index * progressionStep);
  const hiddenNumber = progression[hiddenPosition];
  progression[hiddenPosition] = '..';

  console.log('Question: ', JSON.stringify(progression));
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = String(hiddenNumber);

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${name}!`);
  return false;
};
