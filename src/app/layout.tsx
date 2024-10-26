import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/index";

const inriaSans = Inria_Sans({
    weight: "400",
    subsets: ["latin"],
});

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Rolling Hills Industries | Commercial Cleaning Company",
    description:
        "Rolling Hills Industries is a commercial cleaning company and supply dealer proudly serving Western Pennsylvania, offering top-quality cleaning services and bulk cleaning supplies for businesses.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head></head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${inriaSans.className} text-navy-blue`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
