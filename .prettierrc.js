module.exports = {
    semi: false,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4,
    overrides: [
        {
            files: ['src/**/*.ts', 'packages/**/*.ts'],
            options: {
                parser: 'typescript'
            }
        }
    ]
}
