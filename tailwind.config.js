/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        keyframes: {
            slideUp: {
                "0%": { transform: "translateY(20px)", opacity: "0" },
                "100%": { transform: "translateY(0)", opacity: "1" },
            },
        },
        animation: {
            slideUp: "slideUp 0.8s ease-out forwards",
        },
        // extend: {},
    },
    plugins: [
        //require('@tailwind/typography')
    ],
}
