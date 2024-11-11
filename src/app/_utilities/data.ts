import {
    Page,
    Business,
    Client,
    CleaningProduct,
    EmployeeBenefit,
} from "../_utilities";

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

export const clientList: Client[] = [
    {
        imageSrc: "/independence-health-system.png",
        alt: "Independence Health System",
    },
    {
        imageSrc: "/s-and-t-bank.png",
        alt: "S & T Bank",
    },
    {
        imageSrc: "/smail-auto-group.png",
        alt: "Smail Auto Group",
    },
    {
        imageSrc: "/pace-industries.png",
        alt: "Pace Industries",
    },
    {
        imageSrc: "/vee-neal-aviation.png",
        alt: "Vee Neal Aviation",
    },
    {
        imageSrc: "/westmoreland-county-pennsylivania.png",
        alt: "Westmoreland County Pennsylivania",
    },
    {
        imageSrc: "/first-commonwealth-bank.png",
        alt: "First Commonwealth Bank",
    },
    {
        imageSrc: "/technimark.png",
        alt: "Technimark",
    },
];

export const cleaningProductsList: CleaningProduct[] = [
    { name: "Floor Care" },
    { name: "Restroom care" },
    { name: "General office maintenance" },
    { name: "Paper products" },
    { name: "Degreasers/cleaners" },
    { name: "Hard surface disinfectants" },
    { name: "Floor coatings" },
    { name: "Hand care products" },
    { name: "Mops" },
    { name: "Brooms" },
    { name: "Buckets" },
];

export const employeeBenefitsList: EmployeeBenefit[] = [
    { name: "Proudly employee owned" },
    { name: "Receive equity and participate in dividends" },
    { name: "401 (k) with employee match" },
    { name: "Healthcare, vision, dental benefits for full-time employees" },
    { name: "Training provided" },
    { name: "Flexible hours" },
    { name: "Work close to home" },
    { name: "Opportunities for advancement" },
    { name: "35+ years in business" },
];
