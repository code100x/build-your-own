/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node', // Test environment setup for Node.js
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Extensions Jest will look for
  transform: {
    '^.+\\.tsx?$': 'ts-jest', 
  },
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'], // Specify test file patterns
  globals: {
    'ts-jest': {
      isolatedModules: true, // Optional for performance: isolates modules to speed up tests
    },
  },
  collectCoverage: true, 
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'], 
};
