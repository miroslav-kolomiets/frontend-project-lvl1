#!/usr/bin/env node
import {
  getPlayerName,
  getRandomInt,
  greatPlayer,
  askQuestions,
  showRules,
} from '../src/index.js';

import {
  QUESTIONS_NUMBER, TEXT_COLORS, locale, rulesPrimeGame,
} from '../src/constants.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getGameQuestions = (count) => {
  const questions = [];

  for (let i = 0; i < count; i += 1) {
    const question = [];
    const randomInt = getRandomInt(1, 100);
    const correctAnswer = isPrime(randomInt);

    question.push(randomInt, correctAnswer);
    questions.push(question);
  }
  return questions;
};

const brainPrimeGame = () => {
  const gameQuestions = getGameQuestions(QUESTIONS_NUMBER);
  const playerName = getPlayerName(locale);

  greatPlayer(playerName, TEXT_COLORS, locale);
  showRules(TEXT_COLORS, rulesPrimeGame);
  askQuestions(TEXT_COLORS, locale, gameQuestions, playerName);
};

brainPrimeGame();
