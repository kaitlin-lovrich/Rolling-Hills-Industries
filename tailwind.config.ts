import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        backgroundImage: {
            "yellow-gray-blue-gradient":
                "linear-gradient(rgba(232, 169, 39, .75) 0%, rgba(169, 186, 213, .80) 100%)",
        },
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "navy-blue": "rgb(3, 41, 84)",
                "gray-blue": "rgb(99, 129, 179)",
                "dark-gray": "rgb(58, 67, 76)",
                "yellow": "rgb(232, 169, 39)",
                "off-white": "rgb(235, 235, 235)",
            },
        },
    },
    plugins: [],
};
export default config;
