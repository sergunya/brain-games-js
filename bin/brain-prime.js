#!/usr/bin/env node

import startGame from '../src/index.js';
import playBrainPrimeGame from '../src/games/brain_prime_game.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

startGame(task, playBrainPrimeGame);
