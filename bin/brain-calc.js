#!/usr/bin/env node

import { runGame } from '../src/index.js';
import { askQuestion, showRules } from '../src/games/brain-calc.js';

runGame(showRules, askQuestion);
