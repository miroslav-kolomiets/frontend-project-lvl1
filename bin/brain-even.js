#!/usr/bin/env node
import readlineSync from 'readline-sync';

const QUESTIONS_NUMBER = 3;

const locale = {
  questions: {
    name: 'May I have your name? ',
    gameQuestion: {
      text1: 'Question: ',
      text2: 'Your answer: ',
    },
  },
  greetings: {
    text1: 'Welcome to the Brain Games!',
    text2: 'Hello, ',
    text3: '!',
  },
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  answer: {
    correct: 'Correct!',
    wrong: {
      text1: '\'yes\' is wrong answer ;(. Correct answer was \'no\'',
      text2: 'Let\'s try again, ',
    },
    finish: {
      text1: 'Congratulations, ',
      text2: '!',
    },
  },
};

const textColors = {
  magenta: '\x1b[35m',
  yellow: '\x1b[33m%s\x1b[0m',
  cyan: '\x1b[36m%s\x1b[0m',
  red: '\x1b[31m',
};

const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

const getRandomGameNumbers = (count) => {
  const randomGameNumbers = [];
  for (let i = 0; i < count; i += 1) {
    randomGameNumbers.push(getRandomInt(1, 10));
  }
  return randomGameNumbers;
};

const getPlayerName = () => readlineSync.question(locale.questions.name);

const checkAnswer = (number, answer) => {
  if ((number % 2 === 0) && (answer === 'yes')) {
    return true;
  }
  return (number % 2 !== 0) && (answer === 'no');
};

const answerQuestions = (numbers, name) => {
  for (let i = 0; i < numbers.length; i += 1) {
    console.log(textColors.yellow, `${locale.questions.gameQuestion.text1}${numbers[i]}`);
    const answer = readlineSync.question(locale.questions.gameQuestion.text2);

    const score = checkAnswer(numbers[i], answer);
    if (!score) {
      console.log(textColors.red, locale.answer.wrong.text1);
      console.log(`${locale.answer.wrong.text2}${name}`);
      break;
    } else {
      console.log(textColors.magenta, locale.answer.correct);
    }
    if (i === numbers.length - 1) {
      console.log(textColors.magenta, `${locale.answer.finish.text1}${name}${locale.answer.finish.text2}`);
    }
  }
};

const greatPlayer = (playerName) => {
  console.log(textColors.yellow, locale.greetings.text1);
  console.log(textColors.cyan, `${locale.greetings.text2}${playerName}${locale.greetings.text3}`);
  console.log(textColors.cyan, locale.rules);
};

const isOddOrEven = () => {
  const gameNumbers = getRandomGameNumbers(QUESTIONS_NUMBER);
  const playerName = getPlayerName();

  greatPlayer(playerName);
  answerQuestions(gameNumbers, playerName);
};

isOddOrEven();
