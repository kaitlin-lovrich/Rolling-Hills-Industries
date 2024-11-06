"use client";

import { clientList } from "@/app/_utilities";
import Image from "next/image";
import { useState } from "react";

export function ClientList() {
    const [isPaused, setIsPaused] = useState(false);
    return (
        <div
            className={`flex flex-nowrap animate-slide-clients hover:cursor-pointer hover:pause ${
                isPaused ? "pause" : "animate-slide-clients"
            }`}
            onClick={() => setIsPaused(!isPaused)}
        >
            {[...clientList, ...clientList].map((client, index) => (
                <div
                    key={index}
                    className="relative flex-shrink-0 w-[300px] h-[180px] m-3 drop-shadow-md"
                >
                    <Image src={client.imageSrc} alt={client.alt} fill={true} />
                </div>
            ))}
        </div>
    );
}
