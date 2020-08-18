
module.exports = {
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx,mdx}', './public/**/*.{js,ts,jsx,tsx,css}'],
    variants: {},
    theme: {
        extend: {
            colors: {
                code: {
                    green: "var(--color-code-green)",
                    yellow: "var(--color-code-yellow)",
                    purple: "var(--color-code-purple)",
                    red: "var(--color-code-red)",
                    blue: "var(--color-code-blue)",
                    white: "var(--color-code-white)",
                },
                "green-150": "#e6ffee",
            },
        },
    },
    plugins: [require('@tailwindcss/typography'),],
}