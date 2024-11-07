import { AnimatedMenuIconProps } from "../_utilities";

export function AnimatedMenuIcon({
    isModalOpen,
    setIsModalOpen,
    isScrolledToTop,
}: AnimatedMenuIconProps) {
    return (
        <div
            className={`hamburger z-50 ${isModalOpen ? "open" : ""} ${
                isScrolledToTop ? "" : "hamburger-scrolled"
            }`}
            onClick={() => setIsModalOpen(!isModalOpen)}
        >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    );
}
