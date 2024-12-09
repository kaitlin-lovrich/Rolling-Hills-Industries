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
                    className="relative flex-shrink-0 w-[150px] sm:w-[200px] lg:w-[250px] xl:w-[300px] h-[90px] sm:h-[120px] lg:h-[150px] xl:h-[180px] mx-2 my-3 sm:mx-3 drop-shadow-md"
                >
                    <Image src={client.imageSrc} alt={client.alt} fill={true} />
                </div>
            ))}
        </div>
    );
}
