export default {
  preset: 'ts-jest',

  displayName: "react-unittesting",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts",
    "<rootDir>/setupApiTests.ts",
  ],
  moduleNameMapper: {
    '^.+\\.(css|less)$': 'identity-obj-proxy',
    // "msw": require.resolve('msw'),

  },
  collectCoverageFrom: [
    'src/**/*{js,jsx,ts,tsx}',
    '!src/**/index.ts',
    '!<rootDir>/node_modules/',
  ],
  coverageReporters: ["clover", "json", "lcov", "text", "html"],
};