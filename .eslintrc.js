module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        `eslint:recommended`,
        `plugin:vue/recommended`,
        `plugin:@typescript-eslint/recommended`
    ],
    ignorePatterns: [
        `.gitignore`,
        `assets/`,
        `bin/`,
        `dist/`,
        `example/`
    ],
    parser: `vue-eslint-parser`,
    parserOptions: {
        ecmaVersion: `latest`,
        parser: `@typescript-eslint/parser`,
        sourceType: `module`
    },
    plugins: [
        `vue`,
        `@typescript-eslint`
    ],
    rules: {
        '@typescript-eslint/indent': [2, 4, {
            FunctionExpression: {
                body: 1,
                parameters: 1
            },
            SwitchCase: 1
        }],
        '@typescript-eslint/no-unused-vars': [1, {
            args: `after-used`,
            argsIgnorePattern: `^_`
        }],
        '@typescript-eslint/no-explicit-any': 0,
        'arrow-parens': [2, `as-needed`],
        'comma-dangle': [2, `never`],
        'indent': 0,
        'linebreak-style': [2, `unix`],
        'no-unused-vars': 0,
        'object-curly-spacing': [2, `always`],
        'quote-props': [2, `consistent-as-needed`],
        'quotes': [2, `single`, {
            avoidEscape: true,
            allowTemplateLiterals: true
        }],
        'semi': [2, `never`],
        'vue/html-closing-bracket-newline': [2, {
            singleline: `never`,
            multiline: `never`
        }],
        'vue/html-closing-bracket-spacing': [2, {
            startTag: `never`,
            endTag: `never`,
            selfClosingTag: `never`
        }],
        'vue/html-indent': [2, 4],
        'vue/html-self-closing': [2, {
            html: {
                void: `never`,
                normal: `any`,
                component: `always`
            },
            svg: `always`,
            math: `always`
        }],
        'vue/max-attributes-per-line': [2, {
            singleline: 1,
            multiline: 1
        }],
        'vue/no-unused-vars': 1,
        'vue/require-default-prop': 0,
        'vue/script-indent': [2, 4, {
            baseIndent: 0,
            switchCase: 1
        }]
    },
    overrides: [
        {
            files: [`src/components/*.vue`],
            rules: {
                '@typescript-eslint/ban-types': 0,
                'vue/html-indent': 0
            }
        }
    ]
}
