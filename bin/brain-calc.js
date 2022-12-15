#!/usr/bin/env node

import { runGame } from '../src/index.js';
import { gameRules, gameRound } from '../src/games/brain-calc.js';

runGame(gameRules, gameRound);
