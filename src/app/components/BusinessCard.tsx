import { BusinessCardProps } from "../_utilities";
import Image from "next/image";

export function BusinessCard({ business }: BusinessCardProps) {
    return (
        <div className="relative w-[150px] h-[150px] sm:w-[200px] lg:w-[200px] xl:w-[260px] 2xl:w-[300px] sm:h-[200px] lg:h-[200px] xl:h-[260px] 2xl:h-[300px] drop-shadow-mlg">
            <Image
                src={business.imageSrc}
                alt={business.alt}
                fill={true}
                className="rounded-xl"
            />
            <div className="w-full h-full bg-business-card-overlay absolute flex flex-col justify-end items-center text-center text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl rounded-xl border-2 border-white">
                <div className="flex h-1/3 justify-center items-center px-3 pb-3">
                    {business.alt}
                </div>
            </div>
        </div>
    );
}
