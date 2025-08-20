import { ReactNode } from "react";
import { openSans } from "@/app/utils/font";

interface IParagraph {
  children: ReactNode;
}

const Paragraph = ({ children }: IParagraph) => {
  return <p className={`${openSans.className} text-justify`}>{children}</p>;
};

export default Paragraph;
