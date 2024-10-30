import Link from "next/link";
import { pageNames, hrefToTitle, NavigationProps } from "../_utilities";

export function FooterNavigation({ pathName }: NavigationProps) {
    return (
        <>
            <ul
                className={`flex flex-col md:grid md:grid-rows-3 md:grid-flow-col gap-6`}
            >
                {pageNames.map((page) => (
                    <li key={page}>
                        <Link
                            href={hrefToTitle[page]}
                            className={`duration-1000 ease-in-out transition opacity transform text-lg
                                ${
                                    pathName.includes(hrefToTitle[page])
                                        ? "underline decoration-yellow decoration-4 underline-offset-8 font-bold"
                                        : "hover:font-bold"
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
