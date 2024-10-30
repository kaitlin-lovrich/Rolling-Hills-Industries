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
    themeColor: "#032954",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head></head>
            <body className={`${inriaSans.className} text-navy-blue`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
