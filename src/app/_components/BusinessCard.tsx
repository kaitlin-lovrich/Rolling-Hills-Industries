import { BusinessCardProps } from "../_utilities";
import Image from "next/image";

export function BusinessCard({ business }: BusinessCardProps) {
    return (
        <div className="relative w-[120px] sm:w-[160px] lg:w-[180px] xl:w-[200px] 2xl:w-[220px] h-[120px] sm:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[220px] drop-shadow-lg">
            <Image
                src={business.imageSrc}
                alt={business.alt}
                fill={true}
                className="rounded-xl"
            />
            <div className="w-full h-full bg-business-card-overlay absolute flex flex-col justify-end items-center text-center text-white text-lg sm:text-xl lg:text-2xl 2xl:text-3xl rounded-xl border-[1px] border-white">
                <div className="flex h-2/5 sm:h-1/3 justify-center items-center px-3 pb-3">
                    {business.alt}
                </div>
            </div>
        </div>
    );
}
