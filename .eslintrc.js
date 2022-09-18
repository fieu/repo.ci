module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
        // Overwrite rules specified from the extended configs e.g.
        // "@typescript-eslint/explicit-function-return-type": "off",
    },
}
