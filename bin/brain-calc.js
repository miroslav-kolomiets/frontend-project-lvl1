#!/usr/bin/env node
import {
  getPlayerName,
  getRandomInt,
  greatPlayer,
  askQuestions,
  showRules,
} from '../src/index.js';

import {
  QUESTIONS_NUMBER, TEXT_COLORS, locale, rulesCalcGame,
} from '../src/constants.js';

const getGameQuestions = (count) => {
  const questions = [];
  const mathematicalSymbols = ['+', '-', '*'];

  for (let i = 0; i < count; i += 1) {
    const question = [];
    const firstOperand = getRandomInt(1, 10);
    const secondOperand = getRandomInt(1, 10);
    const mathematicalSymbol = mathematicalSymbols[getRandomInt(0, 3)];
    const textQuestion = `${firstOperand}${mathematicalSymbol}${secondOperand}`;
    /* eslint-disable no-eval */
    const result = eval(textQuestion);

    question.push(textQuestion, result);
    questions.push(question);
  }
  return questions;
};

const brainCalcGame = () => {
  const gameQuestions = getGameQuestions(QUESTIONS_NUMBER);
  const playerName = getPlayerName(locale);

  greatPlayer(playerName, TEXT_COLORS, locale);
  showRules(TEXT_COLORS, rulesCalcGame);
  askQuestions(TEXT_COLORS, locale, gameQuestions, playerName);
};

brainCalcGame();
