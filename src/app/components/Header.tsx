import Link from "next/link";
import { usePathname } from "next/navigation";
import { pageNames, hrefToTitle } from "../_utilities";

export default function Header() {
    const pathName = usePathname();
    return (
        <>
            <nav>
                <ul>
                    {pageNames.map((page) => (
                        <li key={page}>
                            <Link
                                href={hrefToTitle[page]}
                                className={
                                    pathName.includes(hrefToTitle[page])
                                        ? "underline decoration-sky-blue decoration-4 underline-offset-8"
                                        : ""
                                }
                            >
                                {page}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
