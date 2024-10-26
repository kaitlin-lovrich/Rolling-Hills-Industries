"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { pageNames, hrefToTitle } from "../_utilities";
import { useEffect, useState } from "react";
import { PromoBanner } from "./index";

export function Header() {
    const [isScrolledToTop, setIsScrolledToTop] = useState(true);
    const pathName = usePathname();

    useEffect(() => {
        function handleScroll() {
            const isAtTop = window.scrollY <= 250;
            setIsScrolledToTop(isAtTop);
        }
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="w-full bg-white sticky top-0">
            <PromoBanner />
            <nav className="flex justify-between items-center mr-4">
                <Link
                    href={"/"}
                    className={`duration-500 ease-out relative ${
                        isScrolledToTop
                            ? "w-[128px] h-[84px] md:w-[144px] md:h-[95px] lg:w-[170px] lg:h-[112px]"
                            : "w-[96px] h-[63px] md:w-[112px] md:h-[74px] lg:w-[130px] lg:h-[86px]"
                    }`}
                >
                    <Image
                        src="/rolling-hills-industries-cleaning-company-logo.png"
                        alt="Rolling Hills Industries Commercial Cleaning Company"
                        className="duration-500 ease-out hover:scale-105 scale-100"
                        fill={true}
                        style={{
                            objectFit: "cover",
                        }}
                        priority={true}
                    />
                </Link>

                <div>
                    <ul
                        className={`lg:flex hidden gap-6 font-bold duration-500 ease-out  text-black sm:text-red-200 md:text-green-200 lg:text-red-800 xl:text-yellow 2xl:text-dark-gray ${
                            isScrolledToTop ? "text-lg" : "text-base"
                        }`}
                    >
                        {pageNames.map((page) => (
                            <li key={page}>
                                <Link
                                    href={hrefToTitle[page]}
                                    className={`duration-500 ease-out ${
                                        page === "Contact"
                                            ? `bg-navy-blue px-6 py-4 rounded-full text-white tracking-wide ${
                                                  pathName.includes(
                                                      hrefToTitle[page]
                                                  )
                                                      ? "text-yellow"
                                                      : ""
                                              } ${
                                                  isScrolledToTop
                                                      ? "px-6 py-4"
                                                      : "px-[18px] py-2.5"
                                              }`
                                            : pathName.includes(
                                                  hrefToTitle[page]
                                              )
                                            ? "underline decoration-yellow decoration-4 underline-offset-8"
                                            : ""
                                    }`}
                                >
                                    {page}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
