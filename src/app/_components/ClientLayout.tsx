"use client";
import { useEffect, useRef, useState } from "react";
import { Header, ContactBanner, Footer } from ".";

export function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const footerRef = useRef<HTMLDivElement | null>(null);
    const [scrollDirection, setScrollDirection] = useState<
        "up" | "down" | null
    >(null);
    const [isContactOverFooter, setIsContactOverFooter] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        // Scroll direction detection
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const footerElement = footerRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsContactOverFooter(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0, // Trigger as soon as the observer overlaps
            }
        );

        if (footerElement) {
            observer.observe(footerElement); // Attach observer to footer
        }

        return () => {
            if (footerElement) observer.unobserve(footerElement); // Cleanup observer
        };
    }, []);

    return (
        <>
            <Header />
            {children}
            <ContactBanner
                isOverFooter={isContactOverFooter}
                scrollDirection={scrollDirection}
            />
            <Footer ref={footerRef} />
        </>
    );
}
