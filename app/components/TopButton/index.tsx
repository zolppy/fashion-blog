import { useTopRefCtx } from "@/app/context/TopRefCtx";
import { BsArrowUp } from "react-icons/bs";

const TopButton = () => {
    const { scrollToTop } = useTopRefCtx();

    return (
        <button
            onClick={scrollToTop}
            className="bg-black text-white p-3 flex gap-x-3 items-center w-fit lg:transition-colors lg:duration-300 lg:hover:bg-gray-400 lg:hover:text-black"
        >
            <BsArrowUp /> To the top
        </button>
    );
};

export default TopButton;
