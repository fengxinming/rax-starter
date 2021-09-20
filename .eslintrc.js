const { getESLintConfig } = require('@iceworks/spec');

const eslint = getESLintConfig('rax');
let {rules, globals} = eslint;
if(!rules) {
  rules = {};
  eslint.rules = rules;
}
if(!globals) {
  globals = {};
  eslint.globals = globals;
}
rules['no-sequences'] = 'off';
rules['no-param-reassign'] = 'off';
rules['no-cond-assign'] = 'off';
rules['@iceworks/best-practices/no-http-url'] = 'off';
rules['default-case'] = 'off';

globals.dd = true;

module.exports = eslint;
