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
                "linear-gradient(rgba(232, 169, 39, .40) 0%, rgba(169, 186, 213, .40) 100%)",
            "transparent-navy-blue-gradient":
                "linear-gradient(to right, rgba(3, 41, 84, 0) 0%, rgba(2, 24, 49, .80) 50%, rgba(2, 24, 49, .95) 75%, rgba(2, 24, 49, .95) 100%)",
            "footer-image-overlay-1":
                "linear-gradient(to top, rgba(99, 129, 179, 0) 0%, rgba(239, 242, 244, 1) 95%, rgba(255, 255, 255, 1) 100%)",
            "footer-image-overlay-2":
                "linear-gradient(to top, rgba(3, 41, 84, .40) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 100%)",
            "footer-container":
                "linear-gradient(to top, rgba(3, 41, 84, .95) 0%, rgba(3, 41, 84, 1) 100%)",
            "business-card-overlay":
                "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(251, 251, 253, 0) 25%, rgba(3, 41, 84, .20) 50%, rgba(3, 41, 84, .75) 70%, rgba(3, 41, 84, .80) 100%)",
            "gray-blue-yellow-gradient":
                "linear-gradient(to bottom, rgba(3, 41, 84, .25) 0%, rgba(232, 169, 39, .25) 100%)",
        },
        extend: {
            colors: {
                "navy-blue": "rgb(3, 41, 84)",
                "gray-blue": "rgb(99, 129, 179)",
                "dark-gray": "rgb(58, 67, 76)",
                "yellow": "rgb(232, 169, 39)",
                "off-white": "rgb(235, 235, 235)",
                "blue-white": "rgb(210, 219, 233)",
            },
            animation: {
                "slide-clients": "slideClients 50s linear infinite",
            },
            keyframes: {
                slideClients: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
