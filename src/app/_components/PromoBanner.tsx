"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

export function PromoBanner() {
    const [showBanner, setShowBanner] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!showBanner) return null;

    return (
        <div
            className={`flex w-full bg-yellow justify-between items-center py-1 font-bold sm:text-lg duration-500 transition opacity transform ${
                isMounted
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0"
            }`}
        >
            <Link href="/schedule-meeting" className="mx-auto">
                Book a free on-site estimate today!
            </Link>
            <span
                className="mr-2 cursor-pointer *:size-5"
                onClick={() => setShowBanner(false)}
            >
                <FaXmark />
            </span>
        </div>
    );
}
