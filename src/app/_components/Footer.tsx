"use client";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { Button, FooterNavigation } from ".";
import { usePathname } from "next/navigation";
import { FooterProps } from "../_utilities";

export function Footer({ ref }: FooterProps) {
    const pathName = usePathname();
    return (
        <footer ref={ref}>
            <figure className="relative z-10 w-full h-[25rem] lg:h-[30rem] xl:h-[35rem] 2xl:h-[40rem]">
                <Image src="/skyline.jpg" alt="city skyline" fill={true} />
                <div className="absolute z-20 w-full h-full bg-footer-image-overlay-1 "></div>
                <div className="absolute z-30 w-full h-full bg-footer-image-overlay-2 "></div>
            </figure>
            <div className="relative">
                <span className="flex z-30 absolute bottom-0 justify-center items-center w-full text-off-white bg-navy-blue/90 p-2">
                    <a
                        href="https://www.facebook.com/rollinghillsindustries/"
                        target="_blank"
                        rel="noopener noreffer"
                        className=" *:size-10 hover:text-yellow scale-100 hover:scale-105 duration-500 ease-out"
                    >
                        <BsFacebook />
                    </a>
                </span>
            </div>
            <hr className="w-full border-t-1 border-off-white"></hr>
            <section className="w-full bg-footer-container text-off-white">
                <div className="flex flex-col sm:flex-row w-[90%] lg:w-[75%] max-w-[1020px] mx-auto py-6 sm:py-10 gap-10 *:gap-4 sm:*:gap-6">
                    <nav className="flex flex-col w-full sm:w-1/2 text-center md:text-left">
                        <h3 className="text-2xl w-full font-bold">
                            QUICK LINKS
                        </h3>
                        <FooterNavigation pathName={pathName} />
                    </nav>
                    <div className="flex flex-col w-full sm:w-1/2 font-bold md:items-end text-center md:text-left">
                        <h3 className="text-2xl md:self-end md:pr-[4.4rem]">
                            LOCATION
                        </h3>
                        <address className="flex flex-col not-italic gap-.5 text-lg md:text-start font-normal">
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
                <div className="flex gap-3 lg:gap-1 w-full items-center bg-white py-4 lg:py-2 pr-4 lg:pr-2 pl-4 lg:pl-0 text-dark-gray">
                    <div className="hidden lg:block w-[288.13px] xl:w-[345.89px]">
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
                    </div>
                    <div className="flex flex-col gap-1.5 xl:gap-3 text-center mx-auto text-sm xl:text-base">
                        <p className="*:duration-300 *:ease-out *:hover:cursor-pointer *:hover:text-yellow">
                            Website built and designed by{" "}
                            <a
                                href="https://kaitlin-lovrich-portfolio.vercel.app/"
                                target="_blank"
                                rel="noopener noreffer"
                            >
                                Kaitlin Lovrich
                            </a>
                        </p>
                        <p>
                            Copyright © 2024 Rolling Hills Industries. All
                            rights Reserved.
                        </p>
                        <p className="*:duration-300 *:ease-out">
                            <Link
                                href="/privacy-policy"
                                className="hover:text-yellow"
                            >
                                Privacy Policy
                            </Link>{" "}
                            |{" "}
                            <Link
                                href="/photo-credits
                            "
                                className="hover:text-yellow"
                            >
                                Photo Credits
                            </Link>
                        </p>
                    </div>
                    <Link
                        href="#"
                        className="hidden lg:block *:right-0 *:top-0 text-base xl:text-lg *:gap-1.5 *:xl:gap-3 *:pl-6 *:xl:pl-8 *:py-1.5 *:xl:py-2 *:*:*:size-7 *:*:*:xl:size-9  *:*:pr-2 *:*:xl:pr-4"
                    >
                        <Button text={"BOOK A FREE ON-SITE ESTIMATE"} />
                    </Link>
                </div>
            </section>
        </footer>
    );
}
