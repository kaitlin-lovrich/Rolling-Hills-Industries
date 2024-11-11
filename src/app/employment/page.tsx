import { Banner, Button, Video } from "../_components";
import Image from "next/image";
import { employeeBenefitsList } from "../_utilities";

export default function Employment() {
    return (
        <main className="flex flex-col gap-4 min-h-screen">
            <Banner
                backgroundImageUrl="/cleaning-crew-giving-thumbs-up.jpg"
                altText="Cleaning crew giving thumbs up cleaning"
            >
                <div className="flex items-end w-full h-full">
                    <div className="bg-blue-white/50 w-full pl-5 lg:pl-20 py-1 sm:py-2 xl:py-3">
                        <h1>ROLLING HILLS IS NOW HIRING!!</h1>
                    </div>
                </div>
            </Banner>
            <section className="mx-auto w-[95%] max-w-[1400px] lg:mt-4">
                <article className="flex flex-col justify-center items-center px-5 lg:px-0 py-6 xl:py-11 2xl:py-14 gap-5 lg:gap-7 xl:gap-10 2xl:gap-12  w-full sm:w-[90%] xl:w-[95%] mx-auto *:leading-relaxed">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                        Join the Team at Rolling Hills Industries
                    </h2>
                    <div className="w-full *:max-w-[350px] *:lg:max-w-[430px] my-6 xl:my-11 2xl:my-14 bg-light-blue/30 flex flex-col items-center py-3 drop-shadow-xl text-navy-blue font-bold px-8 text-center">
                        <span>
                            We Offer Competitive Pay Rates + Ownership Equity +
                            Flexible Scheduling + PTO + 401(k) Match + Benefits
                        </span>
                    </div>
                    <h3 className="text-navy-blue text-center font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
                        Apply to Join Our Team Today!
                    </h3>
                    <div className="flex flex-col gap-3 xl:gap-5">
                        <p>
                            With over 35 years of experience in the field, the
                            team at Rolling Hills understands that our employees
                            have a busy and demanding life. That&apos;s why we
                            offer flexible hours, a good pay rate, and everyone
                            is treated with respect and the utmost
                            consideration. If you are dependable, have a strong
                            work ethic, and want to share our business values,
                            you can work with us!
                        </p>
                        <p className="sm:text-red-400 md:text-green-400 lg:text-red-700 xl:text-yellow 2xl:text-dark-gray">
                            The truth is that we love to clean. It&apos;s
                            rewarding and satisfying to do a great job and
                            exceed the expectations of our valued clients. Our
                            philosophy is to build long term relationships with
                            our customers and employees. There is a place for
                            you at Rolling Hills.
                        </p>
                    </div>
                    <div className="text-lg sm:text-2xl xl:text-3xl 2xl:text-3xl  *:gap-0.5 *:sm:gap-4 *:pl-5 *:sm:pl-10 *:py-2 *:sm:py-2 *:xl:py-2  *:*:*:size-9 *:*:*:sm:size-10 *:*:*:xl:size-11 *:*:*:2xl:size-12  *:*:pr-1.5 *:*:sm:pr-4">
                        <Button text={"VIEW AVAILABLE JOBS"} />
                    </div>
                    <figure className="relative w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem] 2xl:h-[40rem] mb-6 xl:mb-11 2xl:mb-14 *:rounded-xl">
                        <Image
                            src="/team-members-cleaning-office.jpg"
                            alt="Team members cleaning office"
                            fill={true}
                        />
                    </figure>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1400px] relative">
                <article className="flex flex-col items-center w-full sm:w-[90%]  xl:w-[95%] *:xl:w-[85%] mx-auto py-6 xl:py-11 2xl:py-14 gap-5 lg:gap-7 xl:gap-10 2xl:gap-12">
                    <h3 className="text-navy-blue font-bold text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                        Unique Cleaning Products
                    </h3>
                    <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 ">
                        <ul className="grid grid-cols-2 gap-3 xl:gap-6 font-bold text-navy-blue list-disc ml-6 sm:ml-8">
                            {employeeBenefitsList.map((benefit, index) => (
                                <li key={index}>{benefit.name}</li>
                            ))}
                        </ul>
                    </div>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1400px]">
                <article className="flex flex-col justify-center items-center py-6 xl:py-11 2xl:py-14">
                    <div className="w-[95%] max-w-[1300px] sm:w-[90%] lg:w-[90%]">
                        <Video />
                    </div>
                </article>
            </section>
        </main>
    );
}
