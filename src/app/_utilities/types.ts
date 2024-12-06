export type Page =
    | "Home"
    | "About"
    | "Janitorial Services"
    | "Janitorial Supplies"
    | "Employment"
    | "Contact";

export interface BannerProps {
    isHomePage?: boolean;
    backgroundImageUrl: string;
    altText: string;
    title?: string;
    children?: React.ReactNode;
}

export interface ButtonProps {
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;
}

export interface NavigationProps {
    isScrolledToTop?: boolean;
    pathName: string;
}

export interface AnimatedMenuIconProps {
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
    isScrolledToTop: boolean;
}

export interface BusinessCardProps {
    business: Business;
}

export type Business = {
    imageSrc: string;
    alt: string;
};

export type Client = {
    imageSrc: string;
    alt: string;
};

export type CleaningProduct = {
    name: string;
};

export type EmployeeBenefit = {
    name: string;
};

export interface Window {
    grecaptcha: Grecaptcha;
}

export interface Grecaptcha {
    getResponse: (opt_widget_id?: string) => string;
    reset: (opt_widget_id?: string) => void;
}
