module.exports = {
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  printWidth: 120,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: true,
  jsxBracketSameLine: true,
  arrowParens: 'always',
  quoteProps: 'as-needed',
  importOrder: [
    '^react(.*)',
    '^@tanstack/(.*)$',
    '^@map/(.*)$',
    '^@marker/(.*)$',
    '^@utils/(.*)$',
    '^@stores/(.*)$',
    '^@hooks/(.*)$',
    '^@common/(.*)$',
    '^@components/(.*)$',
    '^@ui/(.*)$',
    '^App',
    '^mocks',
    '^style/(.*)$',
    '^@constants',
    '^[./]',
    '^types'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
