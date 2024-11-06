import { businessesServiced } from "./_utilities";
import { Banner, Button, BusinessCard } from "./components";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <main className="flex flex-col gap-4 min-h-screen">
                <Banner
                    backgroundImageUrl="/shiny-night-city.jpg"
                    altText="Shiny night city"
                    isHomePage={true}
                >
                    <h1>ROLLING HILLS COMMERCIAL CLEANING SERVICES</h1>
                    <div className="text-lg sm:text-2xl xl:text-3xl 2xl:text-4xl  *:gap-0.5 *:sm:gap-4 *:pl-5 *:sm:pl-10 *:py-2 *:sm:py-3 *:xl:py-4  *:*:*:size-9 *:*:*:sm:size-10 *:*:*:xl:size-11 *:*:*:2xl:size-14  *:*:pr-1.5 *:*:sm:pr-4">
                        <Button text={"BOOK A FREE ON-SITE ESTIMATE"} />
                    </div>
                    <span className="text-black sm:text-red-200 md:text-green-200 lg:text-red-800 xl:text-yellow 2xl:text-dark-gray ">
                        Cleaning Western PA Since 1986, Proudly Employee Owned
                        Since 2022
                    </span>
                </Banner>
                <section className="w-full relative h-[45rem] sm:h-[55rem] md:h-[40rem] lg:h-[45rem] xl:h-[55rem] 2xl:h-[65rem]">
                    <Image
                        src="/man-holding-cleaning-supplies.jpg"
                        alt="Man holding cleaning supplies"
                        fill={true}
                        priority={true}
                        className="opacity-50"
                    />

                    <article className="w-full h-full bg-navy-blue/75 absolute flex flex-col justify-center items-center text-center gap-8 sm:gap-10 lg:gap-16 xl:gap-24">
                        <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                            We Offer Commercial Cleaning Services
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center xl:w-[65%] max-w-[1400px] gap-x-8 sm:gap-x-20 lg:gap-x-32 gap-y-8 sm:gap-y-10 lg:gap-y-16 xl:gap-y-24">
                            {businessesServiced.map((business, index) => (
                                <BusinessCard business={business} key={index} />
                            ))}
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}
