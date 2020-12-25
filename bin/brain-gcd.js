#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { QUESTIONS_NUMBER, RULES_GCD_GAME } from '../src/constants.js';
import brainGCDGame from '../src/games/gcd-game.js';

startGame(brainGCDGame(QUESTIONS_NUMBER), RULES_GCD_GAME);
