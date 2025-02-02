module.exports = {
  transform: {
    '^.+\\.(ts|js)x?$': 'ts-jest',
  },
  testEnvironment: 'node',
  testRegex: './src/.*\\.(test|spec)\\.(ts|js)x?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  roots: ['<rootDir>/src'],
}
