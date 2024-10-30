"use client";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { Button, FooterNavigation } from ".";
import { usePathname } from "next/navigation";

export function Footer() {
    const pathName = usePathname();
    return (
        <footer className="">
            <figure className="relative z-10 w-full h-[25rem] lg:h-[30rem] xl:h-[35rem] 2xl:h-[40rem]">
                <Image src="/skyline.jpg" alt="city skyline" fill={true} />
                <div className="absolute z-20 w-full h-full bg-footer-image-overlay-1 "></div>
                <div className="absolute z-30 w-full h-full bg-footer-image-overlay-2 "></div>
            </figure>
            <div className="relative">
                <span className="flex z-40 absolute bottom-0 justify-center items-center w-full text-off-white bg-navy-blue/90 p-2 *:size-10">
                    <BsFacebook />
                </span>
            </div>
            <hr className="w-full border-t-2 border-off-white"></hr>
            <section className="w-full bg-footer-container text-off-white">
                <div className="flex flex-col sm:flex-row w-[90%] lg:w-[75%] mx-auto py-6 sm:py-10 gap-10 *:gap-4 sm:*:gap-6">
                    <nav className="flex flex-col w-full sm:w-1/2">
                        <h3 className="text-2xl w-full font-bold">
                            QUICK LINKS
                        </h3>
                        <FooterNavigation pathName={pathName} />
                    </nav>
                    <div className="flex flex-col w-full sm:w-1/2 font-bold md:items-end">
                        <h3 className="text-2xl md:self-end pr-[4.4rem]">
                            LOCATION
                        </h3>
                        <address className="flex flex-col not-italic gap-.5 text-lg font-normal">
                            <p>Rolling Hills Industries</p>
                            <p>700 Hoke St</p>
                            <p>Latrobe, PA 15650</p>
                            <p className="pt-6">
                                <a
                                    href="tel:724-539-4199"
                                    className="hover:underline"
                                >
                                    724-539-4199
                                </a>
                            </p>
                        </address>
                    </div>
                </div>
                <div className="flex w-full bg-white py-2">
                    <figure
                        className="relative w-[96px] h-[63px] md:w-[112px] md:h-[74px] lg:w-[130px] lg:h-[86px]
"
                    >
                        <Image
                            src="/rolling-hills-industries-cleaning-company-logo.png"
                            alt="Rolling Hills Industries Commercial Cleaning Company"
                            className="duration-500 ease-out hover:scale-105 scale-100"
                            fill={true}
                            sizes="(max-width: 768px) 96px, (max-width: 1024px) 112px, 170px"
                            quality={100}
                        />
                    </figure>
                    <div className="flex flex-col gap-3 text-center mx-auto text-navy-blue text-sm xl:text-base">
                        <p className="*:font-semibold *:hover:cursor-pointer *:hover:text-dark-gray">
                            Website built and designed by{" "}
                            <a href="https://kaitlin-lovrich-portfolio.vercel.app/">
                                Kaitlin Lovrich
                            </a>
                        </p>
                        <p>
                            Copyright © 2024 Rolling Hills Industries. All
                            rights Reserved.
                        </p>
                        <p>
                            <Link href="/">Privacy Policy</Link> |{" "}
                            <Link href="/">Photo Credits</Link>
                        </p>
                    </div>
                    <Button text={"BOOK A FREE ON-SITE ESTIMATE"} />
                </div>
            </section>
        </footer>
    );
}
