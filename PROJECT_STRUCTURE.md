# Project Structure Overview

This document provides an overview of the reorganized project structure and explains the purpose of each directory.

## Main Directories

```
/src
├── 01_javascript_fundamentals/    # Core JavaScript concepts
│   ├── 01_variables_data_types/   # Variables and data types
│   ├── 02_operators_expressions/  # Operators and expressions
│   ├── 03_control_flow/           # Conditionals and loops
│   ├── 04_functions/              # Function types and usage
│   └── 05_objects_arrays/         # Object and array operations
│
├── 02_javascript_advanced/        # Advanced JavaScript concepts
│   ├── 01_scope_closures/         # Lexical scope and closures
│   ├── 02_this_keyword/           # Context and the 'this' keyword
│   ├── 03_prototypes_inheritance/ # Prototype chain and inheritance
│   └── 04_es6_features/           # Modern JavaScript features (ES6+)
│
├── 03_async_javascript/           # Asynchronous programming
│   ├── 01_callbacks/              # Callback patterns and usage
│   ├── 02_promises/               # Promise creation and consumption
│   ├── 03_async_await/            # Async/await syntax and patterns
│   └── 04_event_loop/             # JavaScript runtime and event loop
│
├── 04_javascript_oop/             # Object-oriented programming
│   ├── 01_classes/                # ES6 classes and constructor functions
│   ├── 02_inheritance/            # Extending classes and prototype chain
│   └── 03_encapsulation/          # Private fields and information hiding
│
├── 05_api_integration/            # Working with external APIs
│   ├── 01_fetch_api/              # Native fetch API usage
│   ├── 02_rest_principles/        # REST API design and consumption
│   └── 03_graphql_basics/         # GraphQL queries and mutations
│
├── 06_design_patterns/            # Common JavaScript patterns
│   ├── 01_creational_patterns/    # Patterns for object creation
│   ├── 02_structural_patterns/    # Patterns for object composition
│   └── 03_behavioral_patterns/    # Patterns for object interaction
│
├── 07_testing/                    # Testing JavaScript code
│   ├── 01_unit_testing/           # Unit testing with Jest
│   └── 02_debugging_techniques/   # Debugging and performance tools
│
├── 08_project_examples/           # Practical project implementations
│   ├── 01_todo_app/               # Todo list application
│   ├── 02_weather_app/            # Weather forecast application
│   └── 03_quiz_app/               # Interactive quiz application
│
├── 09_typescript_practice/        # TypeScript-specific exercises
└── 10_algorithm_challenges/       # Coding katas and algorithm challenges
```

## Learning Path

The directories are numbered to provide a clear progressive learning path:

1. Start with `01_javascript_fundamentals` to build a solid foundation
2. Move to `02_javascript_advanced` to deepen your understanding
3. Learn asynchronous programming with `03_async_javascript`
4. Study object-oriented concepts in `04_javascript_oop`
5. Practice API integration with `05_api_integration`
6. Apply design patterns from `06_design_patterns`
7. Learn testing practices in `07_testing`
8. Build complete applications in `08_project_examples`
9. Transition to TypeScript with `09_typescript_practice`
10. Challenge yourself with algorithm problems in `10_algorithm_challenges`

## File Organization

Each subdirectory contains:

- A README.md explaining the concept and learning objectives
- Example files demonstrating the concept
- Exercise files with TODO comments for practice
- Test files for verifying solutions

## How to Use This Structure

1. Follow the numbered directories sequentially for a structured approach
2. Each directory has examples and exercises to practice
3. Complete the TODOs in exercise files to test your understanding
4. Build the project examples to apply multiple concepts together
5. Use the clean_code.sh script to practice implementing solutions from scratch