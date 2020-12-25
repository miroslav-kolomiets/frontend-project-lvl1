import readlineSync from 'readline-sync';
import { LOCALE, TEXT_COLORS } from './constants.js';

export const askPlayerName = (locale) => readlineSync.question(locale.questions.name);

export const getRandomNumber = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

export const greetPlayer = (playerName, locale) => {
  console.log(TEXT_COLORS.yellow, locale.greetings.text1);
  console.log(TEXT_COLORS.cyan, `${locale.greetings.text2}${playerName}${locale.greetings.text3}`);
};

export const showRules = (locale) => {
  console.log(TEXT_COLORS.cyan, locale);
};

export const checkAnswer = (answer, correctAnswer) => {
  if (typeof correctAnswer === 'string') {
    return answer === correctAnswer;
  }
  return parseInt(answer, 10) === correctAnswer;
};

export const askQuestions = (locale, questions, name) => {
  for (let i = 0; i < questions.length; i += 1) {
    const question = questions[i][0];
    const correctAnswer = questions[i][1];

    console.log(TEXT_COLORS.yellow, `${locale.questions.gameQuestion.text1}${question}`);
    const answer = readlineSync.question(locale.questions.gameQuestion.text2);

    const isAnswerCorrect = checkAnswer(answer, correctAnswer);

    if (!isAnswerCorrect) {
      console.log(TEXT_COLORS.red, `'${answer}'${locale.answer.wrong.text1}'${correctAnswer}'`);
      console.log(`${locale.answer.wrong.text2}${name}`);
      break;
    } else {
      console.log(TEXT_COLORS.magenta, locale.answer.correct);
    }
    if (i === questions.length - 1) {
      console.log(TEXT_COLORS.magenta, `${locale.answer.finish.text1}${name}${locale.answer.finish.text2}`);
    }
  }
};

export const getGameQuestions = (count, gameFunction, rangeMin, rangeMax) => {
  const questions = [];

  for (let i = 0; i < count; i += 1) {
    const question = [];
    const randomNumber = getRandomNumber(rangeMin, rangeMax);
    const correctAnswer = gameFunction(randomNumber);

    question.push(randomNumber, correctAnswer);
    questions.push(question);
  }
  return questions;
};

export const startGame = (questions, rules) => {
  const playerName = askPlayerName(LOCALE);

  greetPlayer(playerName, TEXT_COLORS, LOCALE);
  showRules(TEXT_COLORS, rules);
  askQuestions(TEXT_COLORS, LOCALE, questions, playerName);
};
