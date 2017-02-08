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

  "plugins": [
    "react"
  ],

  "rules": {
    "comma-dangle": 0,
    "indent": ["error", 2, { "SwitchCase": 2 }],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "ignore",
      "asyncArrow": "ignore"
    }],
    "arrow-body-style": 0,
    "array-bracket-spacing": ["warn", "always"],
    "space-before-blocks": ["error", "always"],
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "object-curly-spacing": ["warn", "always"],
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
    "template-curly-spacing": [2, "always"],

    /* Rules needed to be disabled because of mycshash */
    "global-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "class-methods-use-this": 0,
    /* @TODO enable and fix this linting errors */
    "no-var": 0,
    "vars-on-top": 0,
    "block-scoped-var": 0,
    "no-sequences": 0,
    "no-extend-native": 0,

    // JS DOC
    "require-jsdoc": ["error", {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true,
        "ArrowFunctionExpression": false
      }
    }],
    "valid-jsdoc": ["warn", {
      "requireReturnType": false,
      "requireParamDescription": false,
      "requireReturn": false,
      "requireReturnDescription": false
    }],

    // REACT RULES
    "jsx-quotes": [2, "prefer-double"],
    "react/jsx-boolean-value": 2,
    "react/jsx-curly-spacing": [2, "always"],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-space-before-closing": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/self-closing-comp": 2,
    "react/jsx-no-bind": [2, {
      "allowArrowFunctions": true,
      "allowBind": false,
      "ignoreRefs": true
    }],
    "react/no-did-update-set-state": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/prefer-es6-class": [2, "always"],
    "react/no-unknown-property": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/sort-comp": [2, {
      "order": [
        "static-methods",
        "everything-else",
        "lifecycle",
        "render"
      ],
      "groups": {
        "lifecycle": [
          "getDefaultProps",
          "getInitialState",
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount"
        ]
      }
    }]
  },

  "globals": {
    /** React */
    "React": false,
    "Rx": false,

    /** Angular, to remove when migration done */
    "angular": false,
    "j$": false,
    "mycs": false,
    "Config": false,
    "Run": false,
    "Controller": false,
    "Directive": false,
    "Factory": false,
    "Service": false,
    "Filter": false,
    "inject": false,
    "protractor": false,
    "browser": false,
    "by": false,

    /** Various */
    "$": false, // Jquery
    "__guard__": false, // Rest from decaffeinate
    "mandatory": false, // TODO remove
    "noop": false, // TODO remove
    "_": false, // TODO remove (lodash)
    "io": false, // socket.io
    "jsSHA": false,
    "ga": false, // TODO remove (install as npm package)
    "google": false, // TODO remove (install as npm package)
    "cxApi": false,
    "FC": false,
    "LC_API": false,
    "Bugsnag": false, // TODO remove (install as npm package)
    "MobileDetect": false, // TODO remove (install as npm package)
    "contentful": false, // TODO remove (install as npm package)
    "sha256": false, // TODO remove

  }
};
