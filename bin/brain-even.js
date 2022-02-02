#!/usr/bin/env node

import startGame from '../src/index.js';
import playBrainEvenGame from '../src/games/brain_even_game.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

startGame(task, playBrainEvenGame);
