import { ReactNode } from "react";

interface ISubscribeButtonRed {
    children: ReactNode;
}

const SubscribeButtonRed = ({ children }: ISubscribeButtonRed) => {
    return (
        <button
            type="submit"
            className="bg-red-500 text-white p-2 active:bg-gray-400 active:text-black lg:transition-colors lg:duration-300 lg:hover:bg-gray-400 lg:hover:text-black"
        >
            {children}
        </button>
    );
};

export default SubscribeButtonRed;
