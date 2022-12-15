const nextJest = require('next/jest');
const createJestConfig = nextJest({
    dir: './',
});
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
    moduleNameMapper: {
        // Handle module aliases (this will be automatically configured for you soon)
        '^@components/(.*)$': '<rootDir>/components/$1',
        '^@utils/(.*)$': '<rootDir>/utils/$1',
        '^@styles/(.*)$': '<rootDir>/styles/$1',
        '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    },
    testEnvironment: "jsdom"
};
module.exports = createJestConfig(customJestConfig);
