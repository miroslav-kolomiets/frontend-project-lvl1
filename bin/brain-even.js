#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { QUESTIONS_NUMBER, RULES_EVEN_GAME } from '../src/constants.js';
import brainEvenGame from '../src/games/even-game.js';

startGame(brainEvenGame(QUESTIONS_NUMBER), RULES_EVEN_GAME);
