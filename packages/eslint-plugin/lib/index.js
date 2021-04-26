'use strict';

module.exports = {
    configs: {
        typescript: require('./typescript.js'),
        angular: {
            plugins: ['@angular-eslint', 'import', '@typescript-eslint'],
            extends: [
                'plugin:@angular-eslint/recommended',
                'plugin:@angular-eslint/template/process-inline-templates',
                require.resolve('./typescript.js'),
            ],
        },
        jasmine: {
            plugins: ['jasmine', '@typescript-eslint'],
            extends: ['plugin:jasmine/recommended'],
            rules: {
                'jasmine/new-line-before-expect': 'off',
                '@typescript-eslint/no-floating-promises': 'off',
            },
        },
        lodash: {
            plugins: ['you-dont-need-lodash-underscore'],
            extends: ['plugin:you-dont-need-lodash-underscore/compatible'],
            rules: {
                'you-dont-need-lodash-underscore/is-nil': 'off',
            },
        },
        prettier: {
            extends: ['prettier'],
        },
    },
};
