import Link from "next/link";
import { pageNames, hrefToTitle, NavigationProps } from "../_utilities";

export function DesktopNavigation({
    isScrolledToTop,
    pathName,
}: NavigationProps) {
    return (
        <>
            <ul
                className={`lg:flex hidden gap-6 font-bold duration-500 ease-out ${
                    isScrolledToTop ? "text-lg" : "text-base"
                }`}
            >
                {pageNames.map((page) => (
                    <li key={page}>
                        <Link
                            href={hrefToTitle[page]}
                            className={`duration-500 ease-out ${
                                page === "Contact"
                                    ? `bg-navy-blue/90 hover:bg-navy-blue/80  px-6 py-4 rounded-full text-white drop-shadow-md hover:text-yellow tracking-wide ${
                                          pathName.includes(hrefToTitle[page])
                                              ? "text-yellow"
                                              : ""
                                      } ${
                                          isScrolledToTop
                                              ? "px-6 py-4"
                                              : "px-[18px] py-2.5"
                                      }`
                                    : pathName.includes(hrefToTitle[page])
                                    ? "underline decoration-yellow decoration-4 underline-offset-8"
                                    : ""
                            }`}
                        >
                            {page}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
