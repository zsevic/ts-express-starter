const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('../tsconfig.json');

module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  preset: '@shelf/jest-mongodb',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
