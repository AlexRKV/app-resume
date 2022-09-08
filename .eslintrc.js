module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        "quotes": [0, "single", { "avoidEscape": true }],
        'indent': 'off', // отступы
        "eol-last": 0,
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
        "vuejs-accessibility/label-has-for": ["error", {
            "required": {
                "some": ["nesting", "id"]
            }
        }],
        'comma-dangle': [0, "always-multiline"],
        "arrow-body-style": "off"
    },
};
