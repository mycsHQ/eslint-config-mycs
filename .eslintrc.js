module.exports = {
  "extends": "airbnb-base",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    }
  },

  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jest": true,
    "jasmine": true
  },

  "rules": {
    "comma-dangle": 0,
    "indent": ["error", 2, { "SwitchCase": 2 }],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "ignore",
      "asyncArrow": "ignore"
    }],
    "arrow-body-style": 0,
    "array-bracket-spacing": ["error", "always"],
    "space-before-blocks": ["error", "always"],
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "object-curly-spacing": ["error", "always"],
    "one-var-declaration-per-line": 0,
    "one-var": 0,
    "no-unused-expressions": 0,
    "no-trailing-spaces": "error",
    "no-case-declarations": 0,
    "arrow-parens": 0,
    "import/no-named-as-default": 0,
    "no-const-assign": "error",
    "no-this-before-super": "error",
    "no-undef": "error",
    "no-unreachable": "warn",
    "no-unused-vars": "error",
    "constructor-super": "warn",
    "valid-typeof": "warn",
    "no-param-reassign": 0, // needed because we assign parameters to $scope,
    "func-names": 0, //nice to have for error tracing but too much to fix it now,
    "no-underscore-dangle": 0, // we use it extensively for private functions
    "no-return-assign": 0, // will enable later,
    "max-len": [2, 160],
    "new-cap": 0, // RX constructors start with capital,
    "guard-for-in": 0, // temporary, @TODO will be better to remove the for-in statements
    "no-restricted-syntax": 0, // temporary, @TODO will be better to remove the for-in statements
    "consistent-return": 0, // not important, sometimes we return undefined
    "radix": 0, // parseInt is fine
    "camelcase": 0, // we have camelcase in the orders, e.g. store_code
    "no-useless-escape": 0, // unimportant
    "no-plusplus": 0, // unimportant
    "no-shadow": 0, // temporary @TODO enable, and fix it
    "no-else-return": 0, // unimportant
    "no-use-before-define": 0, // need to disable it because of __guard__
    "no-continue": 0, // unimportant
    "no-loop-func": 0, // unimportant,
    "no-fallthrough": 0, // unimportant,
    "no-nested-ternary": 0,
    "default-case": 0, // didnt want to touch existing logic, @TODO enable it
    "prefer-spread": 0,
    "template-curly-spacing": [2, "always"]

  }
};
