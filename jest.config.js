module.exports = {
  verbose: true,
  roots: [
    '<rootDir>/test'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  },
  testMatch: [
    '**/test/**/*.ts',
  ],
}