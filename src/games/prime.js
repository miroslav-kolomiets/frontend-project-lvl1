import { startGame, getRandomNumber } from '../index.js';

const PRIME_GAME_RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const QUESTIONS_NUMBER = 3;
const GAME_START = 1;
const GAME_END = 100;

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getGameQuestionsAndAnswers = () => {
  const questions = [];

  for (let i = 0; i < QUESTIONS_NUMBER; i += 1) {
    const question = [];
    const randomNumber = getRandomNumber(GAME_START, GAME_END);
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

    question.push(randomNumber, correctAnswer);
    questions.push(question);
  }

  return questions;
};

const gameQuestionsAndAnswers = getGameQuestionsAndAnswers();

const brainPrimeGame = () => startGame(gameQuestionsAndAnswers, PRIME_GAME_RULES);

export default brainPrimeGame;
