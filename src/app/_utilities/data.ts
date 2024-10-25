import { Page } from "../_utilities";

export const pageNames: Page[] = [
    "Home",
    "About",
    "Janitorial Services",
    "Janitorial Supplies",
    "Employment",
    "Contact",
];

export const hrefToTitle: Record<Page, string> = {
    "Home": "/",
    "About": "/about",
    "Janitorial Services": "/janitorial-services",
    "Janitorial Supplies": "/janitorial-supplies",
    "Employment": "/employment",
    "Contact": "/contact",
};
