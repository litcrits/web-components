const rules = { 
  'valid-jsdoc': ['error', {  
    'prefer': { 
      'arg': 'param', 
      'argument': 'param',  
      'return': 'returns',  
    },  
    'requireParamDescription': true,  
    'requireParamType': true, 
    'requireReturnType': true,  
  }], 
  'comma-dangle': ['error', 'only-multiline'],  
  'space-before-function-paren': ['error', {  
    'anonymous': 'always',  
    'named': 'never', 
    'asyncArrow': 'always'  
  }], 
  'no-multiple-empty-lines': ['error', {  
    'max': 1, 
    'maxEOF': 0,  
  }], 
  'eol-last': 'off',  
  'semi': ['error', 'always'],  
  'jest/no-identical-title': 'error', 
  'jest/valid-expect': 'error', 
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'error',
  'jsx-quotes': ['error', 'prefer-double'],
  'react/no-children-prop': 'off',
};

module.exports = {
  extends: [
    'standard',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:react/recommended',
  ],
  plugins: [
    'jsdoc',
    'jest',
    'react-hooks',
  ],
  env: {
    'jest': true,
    'jest/globals': true,
    'browser': true,
  },
  parser: 'babel-eslint',
  rules,
  overrides: [
    {
      extends: [
	'standard', 
	'plugin:jest/recommended',  
	'plugin:jest/style',  
        'plugin:jsdoc/recommended',
	'plugin:react/recommended',
      ],
      files: ['*.utils.js', 'src/utilities/*.js'],
      rules: {
        ...rules,
        'require-jsdoc': ['error', {
          'require': {
            'FunctionDeclaration': true,
            'MethodDefinition': false,
            'ClassDeclaration': false,
            'ArrowFunctionExpression': false,
            'FunctionExpression': false,
          },
        }],
      },
    },
  ]
};