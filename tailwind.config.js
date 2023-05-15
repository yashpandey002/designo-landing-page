/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        fontFamily: {
            sans: ["Jost", "sans-serif"],
        },
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
        },
        extend: {
            colors: {
                peach: "hsl(11, 73%, 66%)",
                black: "hsl(270, 3%, 11%)",
                white: "hsl(0, 0%, 100%)",
                lightPeach: "hsl(11, 100%, 80%)",
                lighterPeach: "hsl(14, 76%, 97%)",
                darkGrey: "hsl(264, 5%, 20%)",
                lightGrey: "hsl(210, 17%, 95%)",
            },
            spacing: {
                17: "4.5rem",
            },
        },
        backgroundPosition: {
            centerBottom3: "center -3.5rem",
        },
    },
    plugins: [],
};
