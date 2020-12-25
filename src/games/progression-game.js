import { getRandomNumber } from '../../src/index.js';
import { QUESTIONS_NUMBER, ARITHMETIC_PROGRESSION_LENGTH } from '../../src/constants.js';

const getArithmeticProgression = (start, step, length) => {
  const arithmeticProgression = [start];
  if (typeof start === 'number' && typeof step === 'number' && typeof length === 'number') {
    for (let i = 0; i < length; i += 1) {
      arithmeticProgression.push(arithmeticProgression[i] + step);
    }
  }
  return arithmeticProgression;
};

const getGameQuestions = (count) => {
  const questions = [];

  for (let i = 0; i < count; i += 1) {
    const question = [];
    let correctAnswer = '';
    const start = getRandomNumber(1, 10);
    const step = getRandomNumber(1, 3);
    const randomEmptyPart = getRandomNumber(1, 11);

    const result = getArithmeticProgression(start, step, ARITHMETIC_PROGRESSION_LENGTH);
    for (let y = 0; y < result.length; y += 1) {
      if (y === randomEmptyPart) {
        const emptyPart = ' .. ';
        const correct = result[y];
        result[y] = emptyPart;
        correctAnswer = correct.toString(10);
      }
    }

    question.push(result.join(', '), correctAnswer);
    questions.push(question);
  }
  return questions;
};

const brainProgressionGame = () => {
  return getGameQuestions(QUESTIONS_NUMBER)
}

export default brainProgressionGame;
