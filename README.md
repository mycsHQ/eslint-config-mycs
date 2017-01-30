# eslint-config-mycs

These are the basic eslint rules used over the mycs repositories.

## To install:
Run `npm install --save-dev git+ssh://git@github.com/mycsHQ/eslint-config-mycs`.  

Keep your `.eslintrc.json` file and make sure that it contains the following:
```
{
  "extends": "mycs"
}
```
This will allow you to use the mycs eslint configuration and extend it with your own eslint configuration parameters.

## Whenever editing the rules

Should you update the linting rules, please run the following command:

`npm version minor`
