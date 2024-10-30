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
