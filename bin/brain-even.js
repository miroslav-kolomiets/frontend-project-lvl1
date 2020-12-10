#!/usr/bin/env node
import {
  getPlayerName,
  greatPlayer,
  askQuestions,
  showRules,
  getGameQuestions,
} from '../src/index.js';

import {
  QUESTIONS_NUMBER, TEXT_COLORS, LOCALE, RULES_EVEN_GAME,
} from '../src/constants.js';

const isNumberOddOrEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEvenGame = () => {
  const gameQuestions = getGameQuestions(QUESTIONS_NUMBER, isNumberOddOrEven, 1, 10);
  const playerName = getPlayerName(LOCALE);

  greatPlayer(playerName, TEXT_COLORS, LOCALE);
  showRules(TEXT_COLORS, RULES_EVEN_GAME);
  askQuestions(TEXT_COLORS, LOCALE, gameQuestions, playerName);
};

brainEvenGame();
