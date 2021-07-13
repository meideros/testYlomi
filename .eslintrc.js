module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/essential',
      'eslint:recommended'
    ],
    rules: {
      "no-irregular-whitespace": 0,
      "no-mixed-spaces-and-tabs": 0,
      "no-undef": 0,
      "no-empty": 0,
      "no-unused-vars": 0,
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }, 
    parserOptions: {
      parser: 'babel-eslint'
    }
  }
   
  