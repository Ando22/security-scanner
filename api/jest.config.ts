import type { Config } from 'jest';

const config: Config = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
    collectCoverage: true,
    collectCoverageFrom: ['**/*.{ts,js}', '!**/node_modules/**', '!**/build/**', '!**/coverage/**'],
    transform: {
        '\\.ts$': '<rootDir>/node_modules/ts-jest',
    },
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    moduleNameMapper: {
        // Handle module aliases (this will be automatically configured for you soon)
        '^database/(.*)$': '<rootDir>/database/$1',
        '^domain/(.*)$': '<rootDir>/domain/$1',
        '^handler/(.*)$': '<rootDir>/handler/$1',
        '^helper/(.*)$': '<rootDir>/helper/$1',
        '^models/(.*)$': '<rootDir>/models/$1',
    },
    coverageReporters: ['text', 'text-summary'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)x?$',
    testPathIgnorePatterns: ['/node_modules/', '/build/', '/coverage/'],
};

export default config;
