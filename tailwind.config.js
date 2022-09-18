/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./resources/**/*.blade.php', './resources/**/*.ts', './resources/**/*.tsx'],
    // Add new font family 'Fira Mono'
    theme: {
        extend: {
            fontFamily: {
                mono: ['Fira Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
