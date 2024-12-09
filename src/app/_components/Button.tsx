import { ButtonProps } from "../_utilities";
import { MdKeyboardArrowRight } from "react-icons/md";

export function Button({ handleClick, text }: ButtonProps) {
    return (
        <button
            onClick={handleClick}
            className="flex bg-navy-blue/90 hover:bg-navy-blue/80 rounded-full drop-shadow-md text-white hover:text-yellow items-center group duration-300 ease-out"
        >
            {text}

            <span className="text-yellow scale-100 *:group-hover:scale-110 *:duration-500 *:ease-out">
                <MdKeyboardArrowRight />
            </span>
        </button>
    );
}
