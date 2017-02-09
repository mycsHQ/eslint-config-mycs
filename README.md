# eslint-config-mycs

[![Build Status](https://travis-ci.org/mycsHQ/eslint-config-mycs.svg?branch=master)](https://travis-ci.org/mycsHQ/eslint-config-mycs)
[![npm](https://img.shields.io/npm/v/eslint-config-mycs.svg)](https://www.npmjs.com/package/eslint-config-mycs)
[![Code Style](https://img.shields.io/badge/code%20style-eslint--mycs-brightgreen.svg)](https://github.com/mycsHQ/eslint-config-mycs)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This package provides [mycs](https://mycs.com)'s eslint rules as an extensible shared config.

## To install

1. Install shared config `npm install --save-dev eslint-config-mycs`.
2. Install peerDependencies

```bash
(
  export PKG=eslint-config-mycs;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

1. Create a `.eslintrc.js` file and make sure that it contains the following:

```bash
module.exports = {
  "extends": "mycs",
  "rules": {
    "require-jsdoc": "warn"
  }
}
```

This will allow you to use the mycs eslint configuration and extend it with your own eslint configuration parameters.

## Whenever editing the rules

Should you update the linting rules, please run the following command:

`npm version minor`
