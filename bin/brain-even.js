#!/usr/bin/env node

import { runGame } from '../src/index.js';
import { askQuestion, showRules } from '../src/games/brain-even.js';

runGame(showRules, askQuestion);