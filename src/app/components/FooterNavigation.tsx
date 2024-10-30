import Link from "next/link";
import { pageNames, hrefToTitle, NavigationProps } from "../_utilities";

export function FooterNavigation({ pathName }: NavigationProps) {
    return (
        <>
            <ul
                className={`flex flex-col md:grid md:grid-rows-3 md:grid-flow-col gap-6 sm:self-center md:self-auto sm:text-start`}
            >
                {pageNames.map((page) => (
                    <li key={page}>
                        <Link
                            href={hrefToTitle[page]}
                            className={`duration-500 ease-out transition opacity transform text-lg
                                ${
                                    pathName.includes(hrefToTitle[page])
                                        ? "underline decoration-yellow decoration-4 underline-offset-8 font-bold"
                                        : "hover:text-yellow"
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
