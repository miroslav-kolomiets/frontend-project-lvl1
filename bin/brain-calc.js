#!/usr/bin/env node
import {
  getPlayerName,
  getRandomNumber,
  greatPlayer,
  askQuestions,
  showRules,
} from '../src/index.js';

import {
  QUESTIONS_NUMBER, TEXT_COLORS, LOCALE, RULES_CALC_GAME,
} from '../src/constants.js';

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
  return questions;
};

const brainCalcGame = () => {
  const gameQuestions = getGameQuestions(QUESTIONS_NUMBER);
  const playerName = getPlayerName(LOCALE);

  greatPlayer(playerName, TEXT_COLORS, LOCALE);
  showRules(TEXT_COLORS, RULES_CALC_GAME);
  askQuestions(TEXT_COLORS, LOCALE, gameQuestions, playerName);
};

brainCalcGame();
