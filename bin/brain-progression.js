#!/usr/bin/env node

import startGame from '../src/index.js';
import playBrainProgression from '../src/games/brain_progression_game.js';

const task = 'What number is missing in the progression?';

startGame(task, playBrainProgression);
