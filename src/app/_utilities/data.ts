import { Page, Business } from "../_utilities";

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

export const businessesServiced: Business[] = [
    { imageSrc: "/bank.jpg", alt: "Banks" },
    { imageSrc: "/medical-facility.png", alt: "Medical Facilities" },
    { imageSrc: "/surgical-facility.jpg", alt: "Surgical Facilities" },
    { imageSrc: "/office-buildings.jpg", alt: "Office Buildings" },
    { imageSrc: "/warehouse.jpg", alt: "Warehouses" },
    { imageSrc: "/automobile-showroom.jpg", alt: "Automobile Showrooms" },
];
