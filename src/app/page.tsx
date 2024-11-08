import { businessesServiced } from "./_utilities";
import { Banner, Button, BusinessCard, ClientList, Video } from "./_components";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col gap-5 min-h-screen">
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
                    Cleaning Western PA Since 1986, Proudly Employee Owned Since
                    2022
                </span>
            </Banner>
            <section className="w-full relative h-[45rem] sm:h-[55rem] md:h-[40rem] lg:h-[45rem] xl:h-[55rem] 2xl:h-[65rem]">
                <Image
                    src="/man-holding-cleaning-supplies.jpg"
                    alt="Man in uniform holding commercial cleaning supplies"
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
                <article className="flex flex-col gap-8 sm:gap-10 lg:gap-16 xl:gap-20 px-5 lg:px-0 py-11 sm:py-14 lg:py-28 xl:py-32 bg-gray-blue-yellow-gradient">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                        Our Mission Is To Go Beyond Cleaning
                    </h2>
                    <div className="flex flex-col-reverse xl:flex-row gap-8 w-full sm:w-[90%] md:w-[85%] xl:w-[95%] mx-auto">
                        <div className="flex flex-col justify-around items-center w-full xl:w-1/2 text-center xl:text-start text-dark-gray gap-8 xl:gap-0">
                            <div className="flex flex-col gap-5">
                                <p>
                                    Rolling Hills Industries&apos; value to you
                                    is defined by the high quality we bring to
                                    your facilities and reduced downtime in your
                                    labor, processes, supplies and equipment.
                                </p>
                                <p>
                                    Our mission is to be the premier provider of
                                    commercial and industrial cleaning services
                                    and products in Westmoreland, Indiana and
                                    surrounding counties.
                                </p>
                                <p>
                                    By listening and responding, we build
                                    satisfying relationships with our clients
                                    and employees. The result is quality,
                                    stability and consistency.
                                </p>
                            </div>
                            <div className="text-lg sm:text-2xl xl:text-3xl 2xl:text-3xl  *:gap-0.5 *:sm:gap-4 *:pl-5 *:sm:pl-10 *:py-2 *:sm:py-2 *:xl:py-2  *:*:*:size-9 *:*:*:sm:size-10 *:*:*:xl:size-11 *:*:*:2xl:size-12  *:*:pr-1.5 *:*:sm:pr-4">
                                <Button text={"LEARN MORE"} />
                            </div>
                        </div>
                        <div className="relative w-full mx-auto max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:w-1/2 xl:max-w-full 2xl:min-w-[730px] h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[700px] drop-shadow-lg">
                            <Image
                                src="/professional-cleaner-showing-approval.jpg"
                                alt="Smiling professional cleaner in uniform giving a thumbs up"
                                fill={true}
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1800px]">
                <article className="flex flex-col gap-8 sm:gap-10 lg:gap-16 xl:gap-20 px-5 lg:px-0 py-11 sm:py-14 lg:py-28 xl:py-32">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                        Top-Quality Cleaning Supplies Used
                    </h2>
                    <div className="flex flex-col xl:flex-row gap-8 w-full sm:w-[90%] md:w-[85%] xl:w-[95%] mx-auto">
                        <div className="relative w-full mx-auto max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:w-1/2 xl:max-w-full 2xl:min-w-[730px] h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[700px] drop-shadow-lg">
                            <Image
                                src="/quality-cleaning-supplies.jpg"
                                alt="Quality cleaning supplies"
                                fill={true}
                                className="rounded-xl"
                            />
                        </div>
                        <div className="flex flex-col justify-around items-center w-full xl:w-1/2 text-center xl:text-start text-dark-gray gap-8 xl:gap-0 ">
                            <div className="flex flex-col gap-5">
                                <p>
                                    When you need janitorial and cleaning
                                    supplies to beautify and clean your
                                    facility, trust our products and their
                                    capability to give you just that! We use
                                    them each and every day.
                                </p>
                                <p>
                                    We understand that cleaning and janitorial
                                    services are crucial for your commercial and
                                    industrial business. That&apos;s why we
                                    strive to be the region&apos;s most
                                    dependable and professional business
                                    cleaning service.
                                </p>
                            </div>
                            <div className="text-lg sm:text-2xl xl:text-3xl 2xl:text-3xl  *:gap-0.5 *:sm:gap-4 *:pl-5 *:sm:pl-10 *:py-2 *:sm:py-2 *:xl:py-2  *:*:*:size-9 *:*:*:sm:size-10 *:*:*:xl:size-11 *:*:*:2xl:size-12  *:*:pr-1.5 *:*:sm:pr-4">
                                <Button text={"LEARN MORE"} />
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1800px]">
                <article className="flex flex-col gap-8 sm:gap-10 lg:gap-16 xl:gap-20 px-5 lg:px-0 py-11 sm:py-14 lg:py-28 xl:py-32 bg-off-white">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                        Reliable Janitorial Services
                    </h2>
                    <div className="flex flex-col-reverse xl:flex-row gap-8 w-full sm:w-[90%] md:w-[85%] xl:w-[95%] mx-auto">
                        <div className="flex flex-col justify-around items-center w-full xl:w-1/2 text-center xl:text-start text-dark-gray gap-8 xl:gap-0 ">
                            <div className="flex flex-col gap-5">
                                <p>
                                    Rolling Hills Industries serves businesses
                                    and organizations in Westmoreland, Indiana
                                    and surrounding counties.
                                </p>
                                <p>
                                    Whether your facility is small or big, the
                                    health and safety of you and your staff is
                                    very important. This not only keeps the
                                    employees happy but also contributes to the
                                    productivity and positive attitude of your
                                    staff.
                                </p>
                            </div>
                            <div className="text-lg sm:text-2xl xl:text-3xl 2xl:text-3xl  *:gap-0.5 *:sm:gap-4 *:pl-5 *:sm:pl-10 *:py-2 *:sm:py-2 *:xl:py-2  *:*:*:size-9 *:*:*:sm:size-10 *:*:*:xl:size-11 *:*:*:2xl:size-12  *:*:pr-1.5 *:*:sm:pr-4">
                                <Button text={"LEARN MORE"} />
                            </div>
                        </div>
                        <div className="relative w-full mx-auto max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:w-1/2 xl:max-w-full 2xl:min-w-[730px] h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[700px] drop-shadow-lg">
                            <Image
                                src="/reliable-janitorial-service.jpg"
                                alt="Reliable janitorial service"
                                fill={true}
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1800px]">
                <article className="flex flex-col text-center gap-8 sm:gap-10 lg:gap-16 xl:gap-20 px-5 lg:px-0 py-11 sm:py-14 lg:py-28 xl:py-32 overflow-hidden">
                    <h2 className="text-navy-blue font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                        Our Clients
                    </h2>
                    <p className="text-dark-gray w-full max-w-[1430px] sm:w-[90%] md:w-[85%] xl:w-[95%] mx-auto">
                        Rolling Hills offers dependable and professional
                        cleaning and janitorial services for any business or
                        organization in Westmoreland, Indiana, and surrounding
                        counties.
                    </p>
                    <div className="flex">
                        <ClientList />
                    </div>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1800px]">
                <article className="flex flex-col justify-center items-center py-11 sm:py-14 lg:py-28 xl:py-32">
                    <div className="w-[95%] max-w-[1300px] sm:w-[90%] lg:w-[90%]">
                        <Video />
                    </div>
                </article>
            </section>
        </main>
    );
}
