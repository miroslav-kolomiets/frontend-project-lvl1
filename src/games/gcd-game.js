import { getRandomNumber } from '../index.js';

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
};

const getGameQuestions = (count) => {
  const questions = [];

  for (let i = 0; i < count; i += 1) {
    const question = [];
    const firstRandomNumber = getRandomNumber(1, 100);
    const secondRandomNumber = getRandomNumber(1, 100);
    const correctAnswer = getGcd(firstRandomNumber, secondRandomNumber);

    question.push(`${firstRandomNumber} ${secondRandomNumber}`, correctAnswer);
    questions.push(question);
  }
  return questions;
};

export default getGameQuestions;
