import readline from 'readline'

import {lexer} from './lexer/index.js';
import {parser} from './parser/index.js';
import {startMessageInConsole, endMessageInConsole} from './process/user.js';
import {toConsole} from './console/toConsole.js';



toConsole(startMessageInConsole);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
	if (input === '.exit')
	{
		toConsole(endMessageInConsole);
		rl.close();
	} 
	else {
		try {
			const {command, args} = lexer(input);
			parser({command, args});
		} catch (error) {
			console.error(error.message);
		}

	}

  });

rl.on('SIGINT', () => {
	toConsole(endMessageInConsole);
	rl.close();
})

rl.on('SIGTSTP', () => {
	toConsole(endMessageInConsole);
	rl.close();
})