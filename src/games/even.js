import { startGame, getRandomNumber } from '../index.js';

const EVEN_GAME_RULES = 'Answer "yes" if the number is even, otherwise answer "no".';
const QUESTIONS_NUMBER = 3;
const GAME_START = 1;
const GAME_END = 10;

const isEven = (number) => (number % 2 === 0);

const getGameQuestionsAndAnswers = () => {
  const questions = [];

  for (let i = 0; i < QUESTIONS_NUMBER; i += 1) {
    const question = [];
    const randomNumber = getRandomNumber(GAME_START, GAME_END);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    question.push(randomNumber, correctAnswer);
    questions.push(question);
  }

  return questions;
};

const gameQuestionsAndAnswers = getGameQuestionsAndAnswers();

const brainEvenGame = () => startGame(gameQuestionsAndAnswers, EVEN_GAME_RULES);

export default brainEvenGame;
