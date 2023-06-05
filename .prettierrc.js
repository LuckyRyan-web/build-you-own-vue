module.exports = {
    semi: false,
    trailingComma: 'es5',
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4,
    overrides: [
        {
            files: ['src/**/*.ts', 'packages/**/*.ts', 'tests/**/*.ts', 'scripts/**/*.ts'],
            options: {
                parser: 'typescript',
            },
        },
    ],
}
