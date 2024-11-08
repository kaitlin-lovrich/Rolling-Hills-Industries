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
                    ? "h-[25rem] lg:h-[30rem] xl:h-[35rem] 2xl:h-[45rem]"
                    : "h-[10rem] sm:h-[15rem] lg:h-[20rem] xl:h-[25rem] 2xl:h-[35rem]"
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
                        ? "flex flex-col justify-center items-center text-center px-4 md:px-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                        : "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
                } w-full h-full bg-yellow-gray-blue-gradient absolute font-bold gap-8 sm:gap-10 lg:gap-16 xl:gap-20 2xl:gap-28`}
            >
                {title}
                {children}
            </div>
        </section>
    );
}
