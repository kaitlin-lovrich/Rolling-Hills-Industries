import {
    Page,
    Business,
    Client,
    CleaningProduct,
    EmployeeBenefit,
    Photo,
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
    { name: "35+ years in business" },
    { name: "Training provided" },
    { name: "Flexible hours" },
    { name: "Work close to home" },
    { name: "Opportunities for advancement" },
    { name: "Healthcare, vision, dental benefits for full-time employees" },
];

export const photoList: Photo[] = [
    {
        imageSrc: "/shiny-night-city.jpg",
        alt: "Shiny night city",
        href: "www.freepik.com",
        credit: "Designed by Freepik",
    },
    {
        imageSrc: "/bank.jpg",
        alt: "Bank",
        href: "https://pixabay.com/users/jamesqube-6733902/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2907728",
        credit: "James Qube from Pixabay",
    },
    {
        imageSrc: "/medical-facility.png",
        alt: "Medical Facility",
        href: "https://pixabay.com/users/iffany-6128830/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8738997",
        credit: "Ivana Tomášková from Pixabay",
    },
    {
        imageSrc: "/surgical-facility.jpg",
        alt: "Surgical Facility",
        href: "https://pixabay.com/users/mspark0-804746/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5979687",
        credit: "mspark0 from Pixabay",
    },
    {
        imageSrc: "/office-buildings.jpg",
        alt: "Office Buildings",
        href: "www.freepik.com",
        credit: "Designed by Freepik",
    },
    {
        imageSrc: "/warehouse.jpg",
        alt: "Warehouse",
        href: "https://pixabay.com/users/icondigital-1559658/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2714998",
        credit: "icondigital from Pixabay",
    },
    {
        imageSrc: "/automobile-showroom.jpg",
        alt: "Automobile Showroom",
        href: "https://pixabay.com/users/99mimimi-11658968/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4597206",
        credit: "99mimimi from Pixabay",
    },
    {
        imageSrc: "/man-holding-cleaning-supplies.jpg",
        alt: "Man in uniform holding commercial cleaning supplies",
        href: "www.freepik.com",
        credit: "Designed by Freepik",
    },
    {
        imageSrc: "/professional-cleaner-showing-approval.jpg",
        alt: "Smiling professional cleaner in uniform giving a thumbs up",
        href: "www.freepik.com",
        credit: "Designed by Freepik",
    },
    {
        imageSrc: "/quality-cleaning-supplies.jpg",
        alt: "Quality cleaning supplies",
        href: "www.freepik.com",
        credit: "Designed by Freepik",
    },
    {
        imageSrc: "/reliable-janitorial-service.jpg",
        alt: "Reliable janitorial service",
        href: "www.freepik.com",
        credit: "Designed by Freepik",
    },
    {
        imageSrc: "/skyline.jpg",
        alt: "City skyline",
        href: "https://pixabay.com/users/cegoh-94852/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=255116",
        credit: "Jason Goh from Pixabay",
    },
    {
        imageSrc:
            "/professional-cleaning-service-person-using-steam-cleaner-office.jpg",
        alt: "Professional cleaning service person using steam cleaner office",
        href: "www.freepik.com",
        credit: "Designed by Freepik",
    },
    {
        imageSrc: "/person-taking-care-office-cleaning.jpg",
        alt: "Person taking care office cleaning",
        href: "www.freepik.com",
        credit: "Designed by Freepik",
    },
    {
        imageSrc: "/full-shot-man-vacuuming-office-floor.jpg",
        alt: "Full shot man vacuuming office floor",
        href: "www.freepik.com",
        credit: "Designed by Freepik",
    },
    {
        imageSrc: "/person-taking-care-office-cleaning2.jpg",
        alt: "Person taking care office cleaning",
        href: "www.freepik.com",
        credit: "Designed by Freepik",
    },
    {
        imageSrc: "/person-holding-cleaning-products.jpg",
        alt: "Person holding cleaning products",
        href: "www.freepik.com",
        credit: "Designed by Freepik",
    },
    {
        imageSrc: "/cleaning-crew-giving-thumbs-up.jpg",
        alt: "Cleaning crew giving thumbs up cleaning",
        href: "www.freepik.com",
        credit: "Designed by Freepik",
    },
    {
        imageSrc: "/team-members-cleaning-office.jpg",
        alt: "Team members cleaning office",
        href: "www.freepik.com",
        credit: "Designed by Freepik",
    },
];
