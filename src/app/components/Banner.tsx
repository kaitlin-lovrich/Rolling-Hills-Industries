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
                    : "h-34 xl:h-96"
            }`}
        >
            <Image
                src={backgroundImageUrl}
                alt={altText}
                fill={true}
                priority={true}
            />
            <div className="w-full h-full bg-yellow-gray-blue-gradient absolute flex flex-col justify-center items-center text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl px-4 md:px-8 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 2xl:gap-28">
                {title}
                {children}
            </div>
        </section>
    );
}
