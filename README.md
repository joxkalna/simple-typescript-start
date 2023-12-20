# Typescript exercises - practice-typescript

- simple exercises that are converted into .ts and written a simple unit test to verify it works as expected.
- this helps learning with jest

### How to run typescript file

`npx ts-node name_of_the_file.ts`

### Features

- Minimal
- TypeScript v4
- Testing with Jest
- Pre-commit hooks with Husky
- VS Code debugger scripts
- Local development with Nodemon

### Scripts

#### `npm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

#### `npm run build`

Builds the app at `build`, cleaning the folder first.

#### `npm run test`

Runs the `jest` tests once.

#### `npm run test:dev`
