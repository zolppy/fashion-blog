import { ReactNode } from "react";
import { openSans } from "@/app/utils/font";

interface ITag {
  children: ReactNode;
  isSelected: boolean;
}

const Tag = ({ children, isSelected }: ITag) => {
  const theme = isSelected
    ? "bg-black text-white"
    : "bg-gray-200 active:bg-gray-400 lg:hover:bg-gray-400 lg:transition-colors lg:duration-300";

  return (
    <button className={`${openSans.className} ${theme} text-xs p-1`}>
      {children}
    </button>
  );
};

export default Tag;
