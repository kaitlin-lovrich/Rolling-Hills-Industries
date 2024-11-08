import { Banner, Video } from "../_components";
import Image from "next/image";
import { cleaningProductsList } from "../_utilities";

export default function JanitorialSupplies() {
    return (
        <main className="flex flex-col gap-4 min-h-screen">
            <Banner
                backgroundImageUrl="/professional-cleaning-service-person-using-steam-cleaner-office.jpg"
                altText="Professional cleaning service person using steam cleaner office"
            >
                <div className="flex items-end w-full h-full">
                    <div className="bg-blue-white/50 w-full pl-5 lg:pl-20 py-1 sm:py-2 xl:py-3">
                        <h1>JANITORIAL SUPPLIES</h1>
                    </div>
                </div>
            </Banner>
            <section className="mx-auto w-[95%] max-w-[1400px] lg:mt-4">
                <article className="flex flex-col justify-center items-center px-5 lg:px-0 py-6 xl:py-11 2xl:py-14 gap-5 lg:gap-7 xl:gap-10 2xl:gap-12  w-full sm:w-[90%] xl:w-[95%] mx-auto *:leading-relaxed">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                        FREE Delivery of All Janitorial Supplies
                    </h2>
                    <div className="flex flex-col gap-3 xl:gap-5">
                        <p>
                            Rolling Hills Industries Inc provides a complete
                            suite of janitorial supplies. We trust our products
                            capabilities because we use them each and every day.
                            You can order products from our list of in-stock
                            products or from Misco&apos;s line of products.
                        </p>
                        <p>
                            Call us for pricing information. Our rates are very
                            competitive. What&apos;s more? We provide FREE
                            delivery of all our products.
                        </p>
                    </div>
                    <figure className="relative w-full  h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem] 2xl:h-[35rem] mb-6 xl:mb-11 2xl:mb-14 *:rounded-xl">
                        <Image
                            src="/person-holding-cleaning-products.jpg"
                            alt="Person holding cleaning products"
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
                            {cleaningProductsList.map((product, index) => (
                                <li key={index}>{product.name}</li>
                            ))}
                        </ul>
                        <p>
                            The details of each area are planned and agreed upon
                            prior to the commencement of the contract. Contact
                            us for details on what special cleaning can be
                            provided as part of the contract or on a request
                            basis.
                        </p>
                    </div>
                </article>
                <footer className="w-full sm:w-[90%] xl:w-[95%] mx-auto my-6 xl:my-11 2xl:my-14 bg-light-blue/30 flex flex-col items-center  py-3 drop-shadow-xl text-navy-blue font-bold px-8 text-center">
                    <p>Emergency response is available 24 hours a day.</p>
                </footer>
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
