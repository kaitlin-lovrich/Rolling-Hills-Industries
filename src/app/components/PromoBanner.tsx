"use client";
import { useState } from "react";

export function PromoBanner() {
    const [showBanner, setShowBanner] = useState(true);

    if (!showBanner) return null;

    return (
        <div className="flex w-full bg-yellow justify-between items-center py-1 font-semibold">
            <span className="mx-auto">Book a free on-site estimate today!</span>
            <span
                className="mr-4 cursor-pointer"
                onClick={() => setShowBanner(!showBanner)}
            >
                X
            </span>
        </div>
    );
}
