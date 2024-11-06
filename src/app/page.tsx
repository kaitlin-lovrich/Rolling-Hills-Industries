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
                    <span>
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

                    <article className="w-full h-full bg-navy-blue/75 absolute flex flex-col justify-center items-center text-center gap-8 sm:gap-10 lg:gap-16 xl:gap-20">
                        <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                            We Offer Commercial Cleaning Services
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center xl:w-[65%] max-w-[1400px] gap-x-7 sm:gap-x-20 lg:gap-x-32 gap-y-7 sm:gap-y-10 lg:gap-y-16 xl:gap-y-24">
                            {businessesServiced.map((business, index) => (
                                <BusinessCard business={business} key={index} />
                            ))}
                        </div>
                    </article>
                </section>
                <section className="mx-auto w-[95%] max-w-[1800px]">
                    <article className="flex flex-col gap-8 sm:gap-10 lg:gap-16 xl:gap-20 px-5 lg:px-0 py-9 sm:py-11 lg:py-20 xl:py-24 bg-gray-blue-yellow-gradient">
                        <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                            Our Mission Is To Go Beyond Cleaning
                        </h2>
                        <div className="flex flex-col-reverse xl:flex-row gap-8 w-full sm:w-[90%] md:w-[85%] xl:w-[95%] mx-auto">
                            <div className="flex flex-col justify-around items-center w-full xl:w-1/2 text-center xl:text-start text-dark-gray text-lg sm:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl gap-8 xl:gap-0 ">
                                <div className="flex flex-col gap-5">
                                    <p>
                                        Rolling Hills Industries&apos; value to
                                        you is defined by the high quality we
                                        bring to your facilities and reduced
                                        downtime in your labor, processes,
                                        supplies and equipment.
                                    </p>
                                    <p>
                                        Our mission is to be the premier
                                        provider of commercial and industrial
                                        cleaning services and products in
                                        Westmoreland, Indiana and surrounding
                                        counties.
                                    </p>
                                    <p>
                                        By listening and responding, we build
                                        satisfying relationships with our
                                        clients and employees. The result is
                                        quality, stability and consistency.
                                    </p>
                                </div>
                                <div className="text-lg sm:text-2xl xl:text-3xl 2xl:text-3xl  *:gap-0.5 *:sm:gap-4 *:pl-5 *:sm:pl-10 *:py-2 *:sm:py-2 *:xl:py-2  *:*:*:size-9 *:*:*:sm:size-10 *:*:*:xl:size-11 *:*:*:2xl:size-12  *:*:pr-1.5 *:*:sm:pr-4">
                                    <Button text={"LEARN MORE"} />
                                </div>
                            </div>
                            <div className="relative w-full mx-auto max-w-[420px] sm:max-w-full md:max-w-[600px] lg:max-w-[800px] xl:w-1/2 xl:max-w-full xl:min-w-[650px] 2xl:min-w-[745px] h-[230px] sm:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] drop-shadow-lg">
                                <Image
                                    src="/professional-cleaner-showing-approval.jpg"
                                    alt="Professional cleaner approved"
                                    fill={true}
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}
