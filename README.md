# Task: File manager

## General
<ul>
	<li>+6 Application accepts username and prints proper message</li>
	<li>+10 Application exits if user pressed ctrl+c or sent .exit command and proper message is printed</li>
</ul>

## Operations fail
<ul>
	<li>+20 Attempts to perform an operation on a non-existent file or work on a non-existent path result in the operation fail</li>
	<li>+10 Operation fail doesn't crash application</li>
</ul>

## Operating system info (prints following information in console) implemented properly
<ul>
	<li>+6 Get EOL (default system End-Of-Line)</li>
	<li>+10 Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)</li>
	<li>+6 Get home directory</li>
	<li>+6 Get current system user name (Do not confuse with the username that is set when the application starts)</li>
	<li>+6 Get CPU architecture for which Node.js binary has compiled</li>
</ul>

## Advanced Scope
<ul>
	<li>+20 Codebase is written in ESM modules instead of CommonJS</li>
	<li>+20 Codebase is separated (at least 7 modules)</li>
</ul>