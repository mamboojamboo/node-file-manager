import {osCommands} from '../os/index.js';

const argsChecker = (args) => {
	if (!args || args.length != 1) throw new Error('Operation failed');
}

export const parser = ({command, args}) => {
	switch (command) {
		case 'up':
			console.log('up');
			break;

		case 'cd':
			console.log('cd');
			break;

		case 'ls':
			console.log('ls');
			break;

		case 'cat':
			console.log('cat');
			break;

		case 'add':
			console.log('add');
			break;

		case 'rn':
			console.log('rn');
			break;

		case 'cp':
			console.log('cp');
			break;

		case 'mv':
			console.log('mv');
			break;

		case 'rm':
			console.log('rm');
			break;

		case 'os':
			argsChecker(args);
			const [arg] = args;
			osCommands(arg);
			break;

		case 'hash':
			console.log('hash');
			break;
			
		case 'compress':
			console.log('compress');
			break;
	
		case 'decompress':
			console.log('decompress');
			break;
		
		default:
			throw new Error('Invalid input');
	}
}