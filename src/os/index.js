import os from 'os';


export const osCommands = (args) => {
	switch (args) {
		case ('--EOL'):
			return console.log(os.EOL);

		case ('--cpus'):
			const normalizeCpus = os.cpus().map(cpu => {
				let {model, speed} = cpu;
				speed = speed < 1000 
					? (speed / 10).toFixed(2) + ' GHZ'
					: (speed / 1000).toFixed(2) + ' GHZ';
				return ({model, speed});
			});
			console.log(`Overall CPUS amout is: ${normalizeCpus.length}\n`);
			return console.table(normalizeCpus);

		case ('--homedir'):
			return console.log(`Home directory is: ${os.homedir()}`);

		case ('--username'):
			return console.log(`User name is: ${os.userInfo().username}`);

		case ('--architecture'):
			return console.log(`CPU architecture is: ${os.arch()}`);
			
		default:
			throw new Error('Operation failed');
	}
};
