import { Banner, Video } from "../_components";
import Image from "next/image";

export default function JanitorialServices() {
    return (
        <main className="flex flex-col gap-5 min-h-screen">
            <Banner
                backgroundImageUrl="/professional-cleaning-service-person-using-steam-cleaner-office.jpg"
                altText="Professional cleaning service person using steam cleaner office"
            >
                <div className="flex items-end w-full h-full">
                    <div className="bg-blue-white/50 w-full pl-5 lg:pl-20 py-2 sm:py-3">
                        <h1>JANITORIAL SERVICES</h1>
                    </div>
                </div>
            </Banner>
            <section className="mx-auto w-[95%] max-w-[1460px] mt-4 sm:mt-7 lg:mt-11 xl:mt-16 text-lg sm:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
                <article className="flex flex-col justify-center items-center gap-5 sm:gap-9 lg:gap-14 xl:gap-16 px-5 lg:px-0 py-4 sm:py-7 lg:py-11 xl:py-16 text-center text-dark-gray w-full sm:w-[90%] md:w-[85%] xl:w-[95%] mx-auto *:leading-relaxed">
                    <h2 className="text-navy-blue font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                        About Rolling Hills Industries
                    </h2>
                    <div className="flex flex-col gap-3 sm:gap-5">
                        <p>
                            When you hire Rolling Hills Industries Inc for
                            janitorial services, you can rest assured knowing
                            that we use only high-quality disinfectants and
                            cleaning products to clean bathrooms, including
                            toilets, sinks, counters, and floor areas.
                        </p>
                        <p>
                            We have a great deal of experience in this area and
                            we also understand that restroom cleanliness is very
                            important. You&apos;ll find your building sparkling
                            clean and properly disinfected.
                        </p>
                    </div>
                </article>
                <footer className="w-full sm:w-[90%] md:w-[85%] xl:w-[95%] mx-auto bg-light-blue/30 flex flex-col items-center gap-3 sm:gap-5 py-3 drop-shadow-xl text-navy-blue font-bold px-8 text-center">
                    <p>
                        All work is guaranteed and we have a great reputation
                        behind us.
                    </p>{" "}
                    <p>Our philosophy is - Do it right the first time!</p>
                </footer>
            </section>
            <section className="mx-auto w-[95%] max-w-[1460px] mt-4 sm:mt-7 lg:mt-11 xl:mt-16 text-lg sm:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl relative h-[45rem] sm:h-[55rem] md:h-[40rem] lg:h-[45rem] xl:h-[55rem] 2xl:h-[65rem]">
                <figure className="relative w-full sm:w-[90%] md:w-[85%] xl:w-[95%] mx-auto  h-[45rem] sm:h-[55rem] md:h-[40rem] lg:h-[45rem] xl:h-[55rem] 2xl:h-[65rem] *:rounded-xl">
                    <Image
                        src="/person-taking-care-office-cleaning.jpg"
                        alt="Person taking care office cleaning"
                        fill={true}
                    />
                    <div className="flex flex-col items-center w-full h-full bg-diagonal-light-blue-to-navy absolute text-white py-11 sm:py-14 lg:py-28 xl:py-32 *:w-[85%] mx-auto gap-8 sm:gap-10 lg:gap-16 xl:gap-20">
                        <h3 className="font-bold text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                            Total Cleaning
                        </h3>
                        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-16 xl:gap-20">
                            <ul className="flex flex-col gap-4 sm:gap-10 font-bold list-disc ml-6 sm:ml-8">
                                <li>General dusting</li>
                                <li>
                                    Cleaning and mopping for any area within
                                    your facility/building
                                </li>
                                <li>Wall washing</li>
                                <li>Sweeping</li>
                            </ul>
                            <p>
                                The details of each area are planned and agreed
                                upon prior to the commencement of the contract.
                                Contact us for details on what special cleaning
                                can be provided as part of the contract or on a
                                request basis.
                            </p>
                        </div>
                    </div>
                </figure>
            </section>
            <section className="mx-auto w-[95%] max-w-[1460px] mt-4 sm:mt-7 lg:mt-11 xl:mt-16">
                <article className="flex flex-col-reverse xl:flex-row w-full sm:w-[90%] md:w-[85%] xl:w-[95%] gap-6 sm:gap-10 lg:gap-12 xl:gap-16 px-5 lg:px-0 py-4 sm:py-7 lg:py-11 xl:py-16 mx-auto">
                    <div className="flex flex-col w-full xl:w-1/2 gap-4 sm:gap-8 lg:gap-10 xl:gap-12 justify-center">
                        <h4 className="text-navy-blue text-center xl:text-start font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                            Floor Care
                        </h4>
                        <div className="flex flex-col gap-3 sm:gap-5">
                            <p className="sm:text-red-400 md:text-green-400 lg:text-red-700 xl:text-yellow 2xl:text-dark-gray">
                                Our experienced and specialized floor care team
                                uses top-notch finishing and stripping products
                                and reliable machinery for good performance. We
                                choose products that have the best ingredients
                                in the cleaning industry.
                            </p>
                            <p>
                                We are sure about the quality and effectiveness
                                of our products that been proven to clean and
                                protect floors - in any condition or location.
                            </p>
                        </div>
                    </div>

                    <div className="relative w-full mx-auto max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:min-w-[650px] xl:w-1/2 xl:max-w-full 2xl:min-w-[800px] h-[350px] sm:h-[450px] lg:h-[550px] 2xl:h-[750px] drop-shadow-lg">
                        <Image
                            src="/full-shot-man-vacuuming-office-floor.jpg"
                            alt="Full shot man vacuuming office floor"
                            fill={true}
                            className="rounded-xl"
                        />
                    </div>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1460px]">
                <article className="flex flex-col xl:flex-row w-full sm:w-[90%] md:w-[85%] xl:w-[95%] 2xl:w-full gap-6 sm:gap-10 lg:gap-12 xl:gap-16 px-5 lg:px-0 py-4 sm:py-7 lg:py-11 xl:py-16 mx-auto">
                    <div className="relative w-full mx-auto max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:min-w-[650px] xl:w-1/2 xl:max-w-full 2xl:min-w-[800px] h-[350px] sm:h-[450px] lg:h-[550px] 2xl:h-[750px] drop-shadow-lg">
                        <Image
                            src="/professional-cleaner-showing-approval.jpg"
                            alt="Smiling professional cleaner in uniform giving a thumbs up"
                            fill={true}
                            className="rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col justify-around items-center w-full xl:w-1/2 xl:text-start text-dark-gray gap-8 xl:gap-0 ">
                        <div className="flex flex-col w-full gap-4 sm:gap-8 lg:gap-10 xl:gap-12  justify-center">
                            <h4 className="text-navy-blue text-center xl:text-start font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                                Our Mission
                            </h4>
                            <div className="flex flex-col gap-3 sm:gap-5">
                                <p>
                                    Our mission is to be the premier provider of
                                    commercial and industrial cleaning services
                                    and products in Westmoreland, Indiana and
                                    surrounding counties. We love our customers
                                    and we love to keep their facilities clean.
                                    By listening and responding we build
                                    satisfying relationships with our clients
                                    and employees. The result is quality,
                                    stability and consistency.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1460px]">
                <article className="flex flex-col justify-center items-center py-4 sm:py-7 lg:py-11 xl:py-16">
                    <div className="w-[95%] max-w-[1300px] sm:w-[90%] lg:w-[90%]">
                        <Video />
                    </div>
                </article>
            </section>
        </main>
    );
}
