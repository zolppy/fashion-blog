import { ReactNode } from "react";

interface IBlackH2 {
    children: ReactNode;
}

const BlackH2 = ({ children }: IBlackH2) => {
    return <h2 className="bg-black text-white p-4 text-xl">{children}</h2>;
};

export default BlackH2;
