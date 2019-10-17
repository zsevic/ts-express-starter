module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  preset: '@shelf/jest-mongodb',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
