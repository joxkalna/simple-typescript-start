# TypeScript and JavaScript Practice Project

This repository contains a collection of coding exercises and practice problems implemented in both TypeScript and JavaScript. It serves as a personal learning project covering various programming concepts, algorithm challenges, and coding katas.

## Project Structure

The project is organized into the following main directories:

- `/src/adventOfCode`: Solutions to Advent of Code challenges
- `/src/javascript_practice`: JavaScript-specific exercises
- `/src/typescript_practice`: TypeScript-specific exercises
- `/src/katas_leet_code_practice`: Solutions to coding katas and LeetCode problems

## Featured Exercises

### FizzBuzz (TypeScript)

```typescript
export default function fizzBuzz(start: number, end: number): number {
  // Implementation details...
}
```

### Code Quality Tools

This project uses several tools to maintain code quality and consistency:

- ESLint: For static code analysis
- Prettier: For code formatting
- Husky: For pre-commit hooks

These tools work together to enforce coding standards and catch potential issues before they're committed.

# Getting Started

- Clone the repository
- Install dependencies: npm install
- `npx ts-node name_of_the_file.ts`: typescript
- node name_of_the_file.js : javascript

# To practice on existing file:

- in script folder I have created a small script that will clean the file you want and just leave comments and imports. This has greatly helped me learn!

## How does it work?

`cd simple-typescript-start/scripts`

- Make the script executable:
  `chmod +x clean_code.sh`
- Run it by providing the file you want to process:
  `./clean_code.sh path/to/your/file.js`
