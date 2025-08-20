import { ReactNode } from "react";

interface IWhiteContainer {
  children: ReactNode;
}

const WhiteContainer = ({ children }: IWhiteContainer) => {
  return <div className="bg-white p-4">{children}</div>;
};

export default WhiteContainer;
