#!/usr/bin/env node

import startGame from '../src/index.js';
import playBrainCalcGame from '../src/games/brain_calc_game.js';

const task = 'What is the result of the expression?';

startGame(task, playBrainCalcGame);
