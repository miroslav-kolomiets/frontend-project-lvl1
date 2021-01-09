import { startGame, getRandomNumber } from '../index.js';

const CALC_GAME_RULES = 'What is the result of the expression?';
const QUESTIONS_NUMBER = 3;

const getGameQuestionsAndAnswers = () => {
  const questions = [];

  for (let i = 0; i < QUESTIONS_NUMBER; i += 1) {
    const question = [];
    const firstOperand = getRandomNumber(1, 10);
    const secondOperand = getRandomNumber(1, 10);
    const mathematicalSymbol = getRandomNumber(0, 3);

    if (mathematicalSymbol === 0) {
      question.push(`${firstOperand} + ${secondOperand}`, `${firstOperand + secondOperand}`);
    } else if (mathematicalSymbol === 1) {
      question.push(`${firstOperand} - ${secondOperand}`, `${firstOperand - secondOperand}`);
    } else if (mathematicalSymbol === 2) {
      question.push(`${firstOperand} * ${secondOperand}`, `${firstOperand * secondOperand}`);
    }

    questions.push(question);
  }

  return questions;
};

const gameQuestionsAndAnswers = getGameQuestionsAndAnswers();

const brainCalcGame = () => startGame(gameQuestionsAndAnswers, CALC_GAME_RULES);

export default brainCalcGame;
