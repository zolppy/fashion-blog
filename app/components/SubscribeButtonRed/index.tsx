import { ReactNode } from "react";

interface ISubscribeButtonRed {
    children: ReactNode;
}

const SubscribeButtonRed = ({ children }: ISubscribeButtonRed) => {
    return (
        <button
            type="submit"
            className="bg-red-500 text-white p-2 transition-colors duration-300 hover:bg-gray-400 hover:text-black"
        >
            {children}
        </button>
    );
};

export default SubscribeButtonRed;
