export default {
  preset: 'ts-jest',
  "moduleFileExtensions": [
    "js",
    "json",
    "ts"
  ],
  roots: ['<rootDir>'],
  "testRegex": ".spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "testEnvironment": "node",
  "collectCoverage": true,
  "coverageDirectory": "./coverage",
  "coveragePathIgnorePatterns": [
    "<rootDir>/apaleo/generated",
    "__mocks__",
    "__fixtures__",
    ".mock.ts",
    ".module.ts",
    ".dto.ts",
    "LoggingService.ts"
  ],
  "coverageReporters": ["cobertura", "html"],
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/"
  ],
  "moduleNameMapper": {
    '^@src/(.*)$': '<rootDir>/$1',
  }
}
