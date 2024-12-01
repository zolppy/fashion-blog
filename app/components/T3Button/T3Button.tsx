import { RefObject } from "react";
import { BsArrowUp } from "react-icons/bs";

interface IT3Button {
    scrollToSection: (ref: RefObject<HTMLElement>) => void;
    topRef: RefObject<HTMLElement>;
}

const T3Button = ({ scrollToSection, topRef }: IT3Button) => {
    return (
        <button
            onClick={() => scrollToSection(topRef)}
            className="bg-black text-white p-3 flex gap-x-3 items-center w-fit transition-colors duration-300 hover:bg-gray-400 hover:text-black"
        >
            <BsArrowUp /> To the top
        </button>
    );
};

export default T3Button;
