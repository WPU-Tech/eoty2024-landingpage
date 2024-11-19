/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./register/**/*.{js,html}", "./src/**/*.{js,html}"],
    theme: {
        extend: {
            screens: {
                xs: "375px",
            },
            fontFamily: {
                montserrat: '"Montserrat", sans-serif',
                bangers: '"Bangers", sans-serif',
            },
        },
    },
    plugins: [],
    safelist: ["translate-y-full", "translate-y-0", "opacity-0", "opacity-100"],
};
