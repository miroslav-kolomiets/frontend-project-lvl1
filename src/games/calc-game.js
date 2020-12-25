import { getRandomNumber } from '../../src/index.js';

const getGameQuestions = (count) => {
  const questions = [];

  for (let i = 0; i < count; i += 1) {
    const question = [];
    const firstOperand = getRandomNumber(1, 10);
    const secondOperand = getRandomNumber(1, 10);
    const mathematicalSymbol = getRandomNumber(0, 3);

    if (mathematicalSymbol === 0) {
      question.push(`${firstOperand} + ${secondOperand}`, firstOperand + secondOperand);
    } else if (mathematicalSymbol === 1) {
      question.push(`${firstOperand} - ${secondOperand}`, firstOperand - secondOperand);
    } else if (mathematicalSymbol === 2) {
      question.push(`${firstOperand} * ${secondOperand}`, firstOperand * secondOperand);
    }

    questions.push(question);
  }
  console.log(questions);
  return questions;
};

export default getGameQuestions;
