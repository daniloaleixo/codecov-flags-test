export default {
  preset: 'ts-jest',
  "moduleFileExtensions": [
    "js",
    "json",
    "ts"
  ],
  "rootDir": "./src",
  "testRegex": ".spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "coverageDirectory": "./coverage",
  "testEnvironment": "node",
  "coveragePathIgnorePatterns": [
    "<rootDir>/apaleo/generated",
    "__mocks__",
    "__fixtures__",
    ".mock.ts",
    ".module.ts",
    ".dto.ts",
    "LoggingService.ts"
  ],
  "moduleNameMapper": {
    '^@src/(.*)$': '<rootDir>/$1',
  }
}
