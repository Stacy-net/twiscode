
module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: false,
  singleQuote: true,
  'react/jsx-max-props-per-line': [1, {maximum: 1, when: 'always'}],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'babel-ts',
      },
    },
  ],
};

