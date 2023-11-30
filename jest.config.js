/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/components/ui/button',
      },
    
  };