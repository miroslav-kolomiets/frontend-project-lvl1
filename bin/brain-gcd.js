#!/usr/bin/env node
import {
  getPlayerName,
  getRandomNumber,
  greatPlayer,
  askQuestions,
  showRules,
} from '../src/index.js';

import {
  QUESTIONS_NUMBER, TEXT_COLORS, LOCALE, RULES_GCD_GAME,
} from '../src/constants.js';

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

const brainGCDGame = () => {
  const gameQuestions = getGameQuestions(QUESTIONS_NUMBER);
  const playerName = getPlayerName(LOCALE);

  greatPlayer(playerName, TEXT_COLORS, LOCALE);
  showRules(TEXT_COLORS, RULES_GCD_GAME);
  askQuestions(TEXT_COLORS, LOCALE, gameQuestions, playerName);
};

brainGCDGame();
