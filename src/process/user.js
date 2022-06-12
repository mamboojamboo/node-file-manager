import os from 'os';

import { INTL } from '../intl/index.js';

const startId = process.argv[2].indexOf('=') + 1;

export const user = process.argv[2].slice(startId);

// export const user = os.userInfo().username;
export const startMessageInConsole = `${INTL.MESSAGES.START_APP} ${user}!`;
export const endMessageInConsole = `${INTL.MESSAGES.EXIT_APP} ${user}!`;