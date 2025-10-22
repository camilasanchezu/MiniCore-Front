/**
 * Base Jest configuration tailored for this Next.js project.
 * More options: https://jestjs.io/docs/configuration
 */
module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/Test"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  coverageDirectory: "TestResults/jest-coverage",
  clearMocks: true,
};
