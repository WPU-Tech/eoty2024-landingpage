/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: '"Montserrat", sans-serif',
            },
        },
    },
    plugins: [],
    safelist: ["translate-y-full", "translate-y-0", "opacity-0", "opacity-100"],
};
