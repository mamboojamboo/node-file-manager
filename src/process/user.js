import { INTL } from '../intl/index.js';

const startId = process.argv[2].indexOf('=') + 1;

export const user = process.argv[2].slice(startId);

export const startMessageInConsole = `${INTL.MESSAGES.START_APP} ${user}!`;
export const endMessageInConsole = `${INTL.MESSAGES.EXIT_APP} ${user}!`;