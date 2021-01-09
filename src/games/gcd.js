import { startGame, getRandomNumber } from '../index.js';

const GCD_GAME_RULES = 'Find the greatest common divisor of given numbers.';
const QUESTIONS_NUMBER = 3;

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
};

const getGameQuestionsAndAnswers = () => {
  const questions = [];

  for (let i = 0; i < QUESTIONS_NUMBER; i += 1) {
    const question = [];
    const firstRandomNumber = getRandomNumber(1, 100);
    const secondRandomNumber = getRandomNumber(1, 100);
    const correctAnswer = `${getGcd(firstRandomNumber, secondRandomNumber)}`;

    question.push(`${firstRandomNumber} ${secondRandomNumber}`, correctAnswer);
    questions.push(question);
  }

  return questions;
};

const gameQuestionsAndAnswers = getGameQuestionsAndAnswers();

const brainGcdGame = () => startGame(gameQuestionsAndAnswers, GCD_GAME_RULES);

export default brainGcdGame;
