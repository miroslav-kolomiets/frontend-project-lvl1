import { startGame, numberOfRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'What is the result of the expression?';

const generateGameRound = () => {
  const round = [];
  const firstOperand = getRandomNumber(1, 10);
  const secondOperand = getRandomNumber(1, 10);
  const operators = '+-*';
  const mathematicalOperator = operators[getRandomNumber(0, 2)];

  switch (mathematicalOperator) {
    case '+':
      round.push(`${firstOperand} + ${secondOperand}`, `${firstOperand + secondOperand}`);
      break;
    case '-':
      round.push(`${firstOperand} - ${secondOperand}`, `${firstOperand - secondOperand}`);
      break;
    case '*':
      round.push(`${firstOperand} * ${secondOperand}`, `${firstOperand * secondOperand}`);
      break;
    default:
      break;
  }

  return round;
};

const generateGameRounds = () => {
  const rounds = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    rounds.push(generateGameRound());
  }

  startGame(rounds, gameRules);
};

export default generateGameRounds;
