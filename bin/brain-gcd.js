#!/usr/bin/env node

import startGame from '../src/index.js';
import playGcdGame from '../src/games/brain_gcd_game.js';

const task = 'Find the greatest common divisor of given numbers.';

startGame(task, playGcdGame);
