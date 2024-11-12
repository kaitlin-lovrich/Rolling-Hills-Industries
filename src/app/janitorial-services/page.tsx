import { Banner, Video } from "../_components";
import Image from "next/image";

export default function JanitorialServices() {
    return (
        <main className="flex flex-col gap-10 xl:gap-14 min-h-screen">
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
            <section className="mx-auto w-[95%] max-w-[1400px] lg:mt-4">
                <article className="flex flex-col justify-center items-center gap-5 lg:gap-7 xl:gap-10 px-5 lg:px-0 text-center text-dark-gray w-full sm:w-[90%] md:w-[85%] xl:w-[95%] mx-auto *:leading-relaxed">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                        Top-Quality Janitorial Services
                    </h2>
                    <div className="flex flex-col gap-3 xl:gap-5">
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
                    <footer className="w-full mt-2 bg-light-blue/30 flex flex-col items-center gap-3 xl:gap-5 py-3 px-8 drop-shadow-xl text-navy-blue font-bold text-center">
                        <p>
                            All work is guaranteed and we have a great
                            reputation behind us.
                        </p>{" "}
                        <p>Our philosophy is - Do it right the first time!</p>
                    </footer>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1400px] relative">
                <figure className="relative w-full sm:w-[90%] md:w-[85%] xl:w-[95%] mx-auto *:rounded-xl">
                    <Image
                        src="/person-taking-care-office-cleaning.jpg"
                        alt="Person taking care office cleaning"
                        fill={true}
                    />
                    <div className="relative flex flex-col items-center w-full h-full bg-diagonal-light-blue-to-navy text-white py-9 xl:py-16 2xl:py-24 *:w-[85%] mx-auto gap-5 lg:gap-7 xl:gap-10">
                        <h3 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                            Total Cleaning
                        </h3>

                        <ul className="flex flex-col gap-3 xl:gap-6 font-bold list-disc ml-10 sm:ml-14">
                            <li>General dusting</li>
                            <li>
                                Cleaning and mopping for any area within your
                                facility/building
                            </li>
                            <li>Wall washing</li>
                            <li>Sweeping</li>
                        </ul>

                        <p>
                            The details of each area are planned and agreed upon
                            prior to the commencement of the contract. Contact
                            us for details on what special cleaning can be
                            provided as part of the contract or on a request
                            basis.
                        </p>
                    </div>
                </figure>
            </section>
            <section className="mx-auto w-[95%] max-w-[1400px]">
                <article className="flex flex-col-reverse xl:flex-row w-full sm:w-[90%] md:w-[85%] xl:w-[95%] gap-5 lg:gap-7 xl:gap-10 px-5 lg:px-0 mx-auto">
                    <div className="flex flex-col w-full xl:w-1/2 gap-5 lg:gap-7 xl:gap-10 justify-center">
                        <h4 className="text-navy-blue font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                            Floor Care
                        </h4>
                        <div className="flex flex-col gap-3 xl:gap-5">
                            <p>
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

                    <div className="relative w-full mx-auto max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px] xl:min-w-[600px] xl:w-1/2 xl:max-w-[600px] h-[350px] sm:h-[450px] lg:h-[550px] drop-shadow-lg">
                        <Image
                            src="/full-shot-man-vacuuming-office-floor.jpg"
                            alt="Full shot man vacuuming office floor"
                            fill={true}
                            className="rounded-xl"
                        />
                    </div>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1400px]">
                <article className="flex flex-col xl:flex-row w-full sm:w-[90%] md:w-[85%] xl:w-[95%] 2xl:w-full gap-5 lg:gap-7 xl:gap-10 px-5 lg:px-0 mx-auto">
                    <div className="relative w-full mx-auto max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px] xl:min-w-[600px] xl:w-1/2 xl:max-w-[600px] h-[350px] sm:h-[450px] lg:h-[550px] drop-shadow-lg">
                        <Image
                            src="/professional-cleaner-showing-approval.jpg"
                            alt="Smiling professional cleaner in uniform giving a thumbs up"
                            fill={true}
                            className="rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col justify-around items-center w-full xl:w-1/2 xl:text-start text-dark-gray gap-8 xl:gap-0 ">
                        <div className="flex flex-col w-full gap-5 lg:gap-7 xl:gap-10 justify-center">
                            <h4 className="text-navy-blue font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                                Our Mission
                            </h4>
                            <div className="flex flex-col gap-3 xl:gap-5">
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
            <section className="mx-auto w-[95%] max-w-[1400px]">
                <article className="flex justify-center">
                    <div className="w-[95%] max-w-[1300px] sm:w-[90%] lg:w-[90%]">
                        <Video />
                    </div>
                </article>
            </section>
        </main>
    );
}
