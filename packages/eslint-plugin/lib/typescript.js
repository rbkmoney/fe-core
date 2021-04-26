'use strict';

module.exports = {
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        require.resolve('./import.json'),
        require.resolve('./unused-imports.json'),
    ],
    rules: {
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-restricted-imports': [
            'error',
            {
                paths: ['rxjs/Rx', 'rxjs/internal', 'lodash', 'lodash-es', '.'],
                patterns: ['src/*'],
            },
        ],

        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    'signature',

                    'public-field',
                    'protected-field',
                    'private-field',

                    'constructor',

                    'public-method',
                    'protected-method',
                    'private-method',
                ],
            },
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                // TODO: strictCamelCase
                format: ['camelCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'typeLike',
                format: ['StrictPascalCase'],
            },
            {
                selector: 'variable',
                modifiers: ['const', 'global'],
                format: ['UPPER_CASE'],
            },
            {
                selector: 'variable',
                modifiers: ['const', 'global'],
                // Objects are functions too
                types: ['function'],
                format: ['UPPER_CASE', 'strictCamelCase'],
            },
            {
                selector: 'enumMember',
                format: ['StrictPascalCase'],
            },
        ],
    },
};
