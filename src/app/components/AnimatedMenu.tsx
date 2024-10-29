import { AnimatedMenuIconProps } from "../_utilities";

export function AnimatedMenuIcon({
    isModalOpen,
    setIsModalOpen,
    isScrolledToTop,
}: AnimatedMenuIconProps) {
    return (
        <div
            className={`${isModalOpen ? "open" : ""} ${
                isScrolledToTop ? "hamburger" : "hamburger-scrolled"
            }`}
            onClick={() => setIsModalOpen(!isModalOpen)}
        >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    );
}
