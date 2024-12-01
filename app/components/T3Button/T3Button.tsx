import { BsArrowUp } from "react-icons/bs";

const T3Button = () => {
    return (
        <button className="bg-black text-white p-3 flex gap-x-3 items-center w-fit transition-colors duration-300 hover:bg-gray-400 hover:text-black">
            <BsArrowUp /> To the top
        </button>
    );
};

export default T3Button;
