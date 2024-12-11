import { BannerProps } from "../_utilities";
import Image from "next/image";

export function Banner({
    backgroundImageUrl,
    altText,
    isHomePage,
    title,
    children,
}: BannerProps) {
    return (
        <section
            className={`w-full relative ${
                isHomePage
                    ? "h-[25rem] xl:h-[30rem]"
                    : "h-[10rem] sm:h-[15rem] lg:h-[20rem] 2xl:h-[25rem]"
            }`}
        >
            <Image
                src={backgroundImageUrl}
                alt={altText}
                fill={true}
                priority={true}
                className="opacity-50"
            />
            <div
                className={`${
                    isHomePage
                        ? "flex flex-col justify-center items-center text-center px-4 md:px-8"
                        : ""
                } w-full h-full bg-yellow-gray-blue-gradient absolute font-bold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-navy-blue gap-8 sm:gap-10 lg:gap-12 2xl:gap-16`}
            >
                {title}
                {children}
            </div>
        </section>
    );
}
