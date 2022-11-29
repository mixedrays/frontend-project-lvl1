#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1) + min);

const isEven = (number) => number % 2 === 0;

const askQuestion = (name) => {
  const questionNumber = getRandomNumber();
  console.log('Question: ', questionNumber);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';
  const isAnswerCorrect = answer === correctAnswer;

  if (isAnswerCorrect) {
    console.log('Correct');
    return true;
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${name}!`);

  return false;
};

const game = () => {
  const name = askName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    if (!askQuestion(name)) {
      return false;
    }
  }

  console.log(`Congratulations, ${name}`);

  return undefined;
};

game();
