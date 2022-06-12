import { INTL } from "../intl/index.js";

const tokenChecker = (token) => token && INTL.TOKENS[token.toUpperCase()] || null;

export const lexer = (str) => {
	const normalizeStr = str.trim().toLowerCase();
	const delimeterIndex = normalizeStr.indexOf(' ');
	const token = delimeterIndex > 0 ? normalizeStr.slice(0, delimeterIndex) : normalizeStr;
	const args = delimeterIndex > 0 && str.slice(delimeterIndex + 1).split(' ') || null;
	const command = tokenChecker(token);

	if (!command) throw new Error('Invalid input');

	return ({
		command,
		args
	})
}
