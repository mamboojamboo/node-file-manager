# Task: File manager

## General
+6 Application accepts username and prints proper message
+10 Application exits if user pressed ctrl+c or sent .exit command and proper message is printed

## Operations fail
+20 Attempts to perform an operation on a non-existent file or work on a non-existent path result in the operation fail
+10 Operation fail doesn't crash application

## Operating system info (prints following information in console) implemented properly
+6 Get EOL (default system End-Of-Line)
+10 Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)
+6 Get home directory
+6 Get current system user name (Do not confuse with the username that is set when the application starts)
+6 Get CPU architecture for which Node.js binary has compiled

## Advanced Scope
+20 Codebase is written in ESM modules instead of CommonJS
+20 Codebase is separated (at least 7 modules)