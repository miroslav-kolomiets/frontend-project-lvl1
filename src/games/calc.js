import { startGame, questionNumber } from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'What is the result of the expression?';

const generateGameRound = () => {
  const round = [];
  const firstOperand = getRandomNumber(1, 10);
  const secondOperand = getRandomNumber(1, 10);
  const operators = '+-*';
  const mathematicalOperator = operators[getRandomNumber(0, 3)];

  if (mathematicalOperator === '+') {
    round.push(`${firstOperand} + ${secondOperand}`, `${firstOperand + secondOperand}`);
  } else if (mathematicalOperator === '-') {
    round.push(`${firstOperand} - ${secondOperand}`, `${firstOperand - secondOperand}`);
  } else if (mathematicalOperator === '*') {
    round.push(`${firstOperand} * ${secondOperand}`, `${firstOperand * secondOperand}`);
  }

  return round;
};

const generateGameRounds = () => {
  const rounds = [];

  for (let i = 0; i < questionNumber; i += 1) {
    rounds.push(generateGameRound());
  }

  return rounds;
};

const gameQuestionsAndAnswers = generateGameRounds();

const brainCalcGame = () => startGame(gameQuestionsAndAnswers, gameRules);

export default brainCalcGame;
