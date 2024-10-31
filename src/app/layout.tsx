import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./components/index";

const inriaSans = Inria_Sans({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Rolling Hills Industries | Commercial Cleaning Company",
    description:
        "Rolling Hills Industries is a commercial cleaning company and supply dealer proudly serving Western Pennsylvania, offering top-quality cleaning services and bulk cleaning supplies for businesses.",
    generator: "Next.js 13 + React 18 + Tailwind CSS",
    applicationName: "Rolling Hills Industries",
    keywords: [
        "commercial cleaning",
        "cleaning services",
        "Western Pennsylvania",
    ],
    authors: [
        {
            name: "Kaitlin Lovrich",
            url: "https://kaitlin-lovrich-portfolio.vercel.app/",
        },
    ],
    creator: "Kaitlin Lovrich",
    publisher: "Rolling Hills Industries",
    formatDetection: {
        email: false,
        address: false,
        telephone: true,
    },
};

// export const viewport: Viewport = {
//     themeColor: "#032954",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#032954" />
            </head>
            <body className={`${inriaSans.className} text-navy-blue`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
