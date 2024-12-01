import { ReactNode } from "react";
import { openSans } from "@/app/font";

interface ITag {
    children: ReactNode;
    isSelected: boolean;
}

const Tag = ({ children, isSelected }: ITag) => {
    const theme = isSelected
        ? "bg-black text-white"
        : "bg-gray-200 hover:bg-gray-400 transition-colors duration-300";

    return (
        <button className={`${openSans.className} ${theme} text-xs p-1`}>
            {children}
        </button>
    );
};

export default Tag;
