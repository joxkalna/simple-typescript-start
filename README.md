# JavaScript and TypeScript Learning Project

This repository contains a comprehensive collection of coding exercises and practice problems implemented in both JavaScript and TypeScript. It serves as a personal learning project covering various programming concepts, algorithm challenges, and coding katas.

## Project Structure

The project is organized into a numbered learning path:

### JavaScript Learning Path
- `/src/01_javascript_fundamentals`: Core JavaScript concepts
  - 01_variables_data_types
  - 02_operators_expressions
  - 03_control_flow
  - 04_functions
  - 05_objects_arrays

- `/src/02_javascript_advanced`: Advanced concepts
  - 01_scope_closures
  - 02_this_keyword
  - 03_prototypes_inheritance
  - 04_es6_features

- `/src/03_async_javascript`: Asynchronous programming
  - 01_callbacks
  - 02_promises
  - 03_async_await
  - 04_event_loop

- `/src/04_javascript_oop`: Object-oriented programming
  - 01_classes
  - 02_inheritance
  - 03_encapsulation

- `/src/05_api_integration`: Working with APIs
  - 01_fetch_api
  - 02_rest_principles
  - 03_graphql_basics

- `/src/06_design_patterns`: Common JavaScript design patterns
  - 01_creational_patterns
  - 02_structural_patterns
  - 03_behavioral_patterns

- `/src/07_testing`: Testing and debugging
  - 01_unit_testing
  - 02_debugging_techniques

### Projects and TypeScript
- `/src/08_project_examples`: Small practical projects
  - 01_todo_app
  - 02_weather_app
  - 03_quiz_app

- `/src/09_typescript_practice`: TypeScript-specific exercises
- `/src/10_algorithm_challenges`: Algorithm challenges and coding katas

## Learning Path

This project is structured to provide a progressive learning path. Follow the numbered directories in sequence:

1. Start with `01_javascript_fundamentals` to master the basics
2. Move to `02_javascript_advanced` to deepen your understanding
3. Learn asynchronous programming with `03_async_javascript`
4. Study object-oriented concepts in `04_javascript_oop`
5. Practice API integration with `05_api_integration`
6. Apply design patterns from `06_design_patterns`
7. Learn testing techniques with `07_testing`
8. Build projects in `08_project_examples`
9. Transition to TypeScript with `09_typescript_practice`
10. Challenge yourself with algorithms in `10_algorithm_challenges`

For a detailed learning roadmap, see the [LEARNING_ROADMAP.md](./LEARNING_ROADMAP.md) file.

## Code Quality Tools

This project uses several tools to maintain code quality and consistency:

- ESLint: For static code analysis
- Prettier: For code formatting
- Husky: For pre-commit hooks

These tools work together to enforce coding standards and catch potential issues before they're committed.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer recommended)

## Setup

1. Clone the repository
2. Install dependencies: `npm install`

## Running the Application

- To run specific files:
  - TypeScript files: `npx ts-node src/filename.ts`
  - JavaScript files: `node src/filename.js`

## Practice Helper

In the scripts folder, there's a helper script that will clean a file and just leave comments and imports:

```bash
cd simple-typescript-start/scripts
chmod +x clean_code.sh
./clean_code.sh path/to/your/file.js
```

This is useful for practicing implementations based on problem descriptions.