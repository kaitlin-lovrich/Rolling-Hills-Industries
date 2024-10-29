import { AnimatedMenuIconProps } from "../_utilities";

export function AnimatedMenuIcon({
    isModalOpen,
    setIsModalOpen,
}: AnimatedMenuIconProps) {
    return (
        <div
            className={`hamburger ${isModalOpen ? "open" : ""}`}
            onClick={() => setIsModalOpen(!isModalOpen)}
        >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    );
}
