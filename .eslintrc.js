module.exports = {
  extends: [
    'airbnb',
    'plugin:jest/recomended',
    'plugin:jest/style'
  ],
  parser: 'babel-eslint',
  plugins: [
    'unused-imports',
    'jest'
  ],
  rules: {
    camelcase: 'off',
    'no-empty-pattern': 'error',
    'no-empty-function': 'error',
    'no-self-assign': 'warn',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'object-curly-newline': [
      2, { minProperties: 5, consistent: true }
    ],
    'new-cap': 'off',
    'react/jsx-closing-bracket-location': [2, { selfClosing: 'tag-aligned', nonEmpty: 'after-props' }],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-fragments': 'off',
    'react/forbid-prop-types': 'off',
    'react/sort-comp': 'off',
    'react/static-property-placement': 'off',
    'react/state-in-constructor': [0, 'never'],
    'no-unmodified-loop-condition': 'error',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'error',
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'no-multi-spaces': 'off',
    'one-var-declaration-per-line': 'off',
    'one-var': 'off',
    'no-multi-assign': 'off',
    'max-len': 'off',
    'consistent-return': 'off',
    indent: ['error', 2],
    quotes: ['error', 'single', {
      allowTemplateLiterals: true
    }],
    'jsx-quotes': ['error', 'prefer-single'],
    // "linebreak-style": ["error", "unix"],
    'linebreak-style': ['off'],
    'import/no-extraneous-dependencies': 'off',
    'react/destructuring-assignment': 0,
    'lines-between-class-members': 'off',
    'react/jsx-curly-newline': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': 1,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true
  }
};
