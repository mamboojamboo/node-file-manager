import readline from 'readline'

import {user, startMessageInConsole, endMessageInConsole} from './process/user.js';
import {toConsole} from './console/toConsole.js';


toConsole(startMessageInConsole);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
	toConsole(`Received: ${input}`);
  });

rl.on('SIGINT', () => {
	toConsole(endMessageInConsole);
	rl.close();
})

rl.on('SIGTSTP', () => {
	toConsole(endMessageInConsole);
	rl.close();
})