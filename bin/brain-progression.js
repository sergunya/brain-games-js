#!/usr/bin/env node

import { TASK, playBrainProgression } from '../src/games/brain_progression_game.js';
import startGame from '../src/index.js';

startGame(TASK, playBrainProgression);
