import { ButtonProps } from "../_utilities";
import { MdKeyboardArrowRight } from "react-icons/md";

export function Button({ handleClick, text }: ButtonProps) {
    return (
        <button
            onClick={handleClick}
            className="flex gap-0.5 sm:gap-4 pl-5 sm:pl-10 py-2 sm:py-3 xl:py-4 bg-navy-blue/85 hover:bg-navy-blue/75 rounded-full drop-shadow-md text-white hover:text-yellow text-lg sm:text-2xl xl:text-3xl 2xl:text-4xl items-center group duration-300 ease-out"
        >
            {text}
            <span className="text-yellow *:size-9 sm:*:size-10 xl:*:size-11 2xl:*:size-14 pr-1.5 sm:pr-4 scale-100 *:group-hover:scale-110 *:duration-500 *:ease-out">
                <MdKeyboardArrowRight />
            </span>
        </button>
    );
}
