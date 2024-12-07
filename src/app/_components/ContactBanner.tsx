"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
import { ContactBannerProps } from "../_utilities";

export function ContactBanner({
    isOverFooter,
    scrollDirection,
}: ContactBannerProps) {
    const [showBanner, setShowBanner] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [showContactOptions, setShowContactOptions] = useState(false);
    const [isBannerHidden, setIsBannerHidden] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        // Hide banner when scrolling down and show when scrolling up
        if (scrollDirection === "down" && isOverFooter) {
            setIsBannerHidden(true); // Hide the banner when scrolling down and over footer
        } else if (scrollDirection === "up" && !isOverFooter) {
            setIsBannerHidden(false); // Show the banner when scrolling up and not over footer
        }
    }, [scrollDirection, isOverFooter]);

    function handleMouseLeave() {
        setShowContactOptions(false);
    }

    return (
        <div
            className={`fixed z-50 bottom-0 right-4 bg-white border-[1px] border-navy-blue text-navy-blue rounded-t-xl w-[85%] max-w-[340px] sm:w-[400px] sm:max-w-full drop-shadow-lg duration-300 transition transform ${
                isMounted ? "-translate-y-0" : "translate-y-full"
            } ${
                showBanner
                    ? "-translate-y-0"
                    : "-translate-y-0.5 hover:cursor-pointer hover:bg-navy-blue/95 hover:text-white bg-white/90"
            } ${isBannerHidden ? "translate-y-full" : ""}`} // Apply the translation effect when needed
        >
            {showBanner ? (
                <>
                    <div className="flex justify-between">
                        <figure
                            className="relative w-[96px] h-[63px] sm:w-[112px] sm:h-[74px] mt-2
"
                        >
                            <Image
                                src="/rolling-hills-industries-cleaning-company-logo.png"
                                alt="Rolling Hills Industries Commercial Cleaning Company"
                                className="duration-500 ease-out hover:scale-105 scale-100"
                                fill={true}
                                quality={100}
                            />
                        </figure>
                        <span
                            className="m-2 cursor-pointer *:size-6"
                            onClick={() => setShowBanner(false)}
                        >
                            <FaXmark />
                        </span>
                    </div>
                    <div className="flex flex-col py-2 mx-auto w-[90%] text-center text-lg gap-2 xl:gap-3">
                        <p>Call for a free estimate!</p>
                        <p>
                            Thanks for stopping by! We&apos;re here to help,
                            please don&apos;t hesitate to reach out.
                        </p>
                    </div>
                    <div className="flex justify-around pt-2 pb-3 mx-auto w-[90%] sm:w-[75%]">
                        <button
                            onClick={() =>
                                (window.location.href = "tel:7245394199")
                            }
                            className="flex bg-navy-blue/90 hover:bg-navy-blue/80 rounded-full drop-shadow-md text-white hover:text-yellow items-center group duration-300 ease-out right-0 top-0 text-base gap-1.5 px-7 py-1.5"
                        >
                            <span className="*:size-4 text-white group-hover:text-yellow scale-100 *:group-hover:scale-110 *:duration-500 *:ease-out pr-2">
                                <FaPhone />
                            </span>
                            Call 724-539-4199
                        </button>
                        <button
                            onClick={() =>
                                setShowContactOptions(!showContactOptions)
                            }
                            className="flex bg-navy-blue/90 hover:bg-navy-blue/80 rounded-full drop-shadow-md text-white hover:text-yellow items-center group/bars duration-300 ease-out right-0 top-0 text-base xl:text-lg gap-1.5 xl:gap-3 px-5 xl:px-7 py-1.5 xl:py-2"
                        >
                            <span className="*:size-5 *:xl:size-6 text-white group-hover/bars:text-yellow">
                                <FaBars />
                            </span>
                        </button>
                        <div
                            onMouseLeave={handleMouseLeave}
                            className={`absolute bottom-[55px] sm:bottom-[60px] right-[25px] sm:right-[55px] rounded-xl bg-navy-blue/90 drop-shadow-md w-[250px] contact-options ${
                                showContactOptions ? "block" : "hidden"
                            }`}
                        >
                            <button
                                onClick={() =>
                                    (window.location.href = "tel:7245394199")
                                }
                                className="flex text-white hover:text-yellow items-center group duration-300 ease-out right-0 top-0 text-base gap-1.5 px-4 py-1.5"
                            >
                                <span className="*:size-4 text-white group-hover:text-yellow scale-100 *:group-hover:scale-110 *:duration-500 *:ease-out pr-2">
                                    <FaPhone />
                                </span>
                                Click to call 724-539-4199
                            </button>
                            <button
                                onClick={() => setShowBanner(false)}
                                className="flex text-white hover:text-yellow group duration-300 ease-out right-0 top-0 text-base px-4 py-1.5"
                            >
                                <Link
                                    href="contact/"
                                    className="flex items-center gap-1.5"
                                >
                                    <span className="*:size-4 text-white group-hover:text-yellow scale-100 *:group-hover:scale-110 *:duration-500 *:ease-out pr-2">
                                        <IoMail />
                                    </span>
                                    We&apos;d love to hear from you
                                </Link>
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <p
                    className={`my-2 text-center opacity transform ${
                        showBanner ? "opacity-0" : "opacity-100"
                    }`}
                    onClick={() => setShowBanner(true)}
                >
                    Call for a free estimate!
                </p>
            )}
        </div>
    );
}
