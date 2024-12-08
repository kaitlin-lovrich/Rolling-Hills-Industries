"use client";
import Link from "next/link";
import { pageNames, hrefToTitle, NavigationProps } from "../_utilities";
import { useEffect, useState } from "react";

export function MobileNavigation({ pathName, closeMenu }: NavigationProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [delayLoading, setDelayLoading] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDelayLoading(false);
        }, 300);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            if (closeMenu) closeMenu();
        }, 100);
    };

    return (
        <div
            onClick={handleClose}
            className={`lg:hidden fixed z-40 w-screen h-screen top-0 right-0 bg-transparent-navy-blue-gradient text-white text-xl duration-500  transition opacity transform ${
                isMounted
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
            } ${isClosing ? "translate-x-full opacity-0" : ""}`}
        >
            <ul className="flex flex-col gap-8 pt-36 pr-7 text-end">
                {pageNames.map((page) => (
                    <li key={page}>
                        <Link
                            href={hrefToTitle[page]}
                            className={`duration-1000 ease-in-out transition opacity transform ${
                                delayLoading ? "opacity-0" : "opacity-100"
                            } ${
                                pathName === hrefToTitle[page]
                                    ? "underline decoration-yellow decoration-4 underline-offset-8 font-bold"
                                    : "hover:font-bold"
                            }`}
                        >
                            {page}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
