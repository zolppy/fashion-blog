"use client";

import {
    createContext,
    MutableRefObject,
    ReactNode,
    RefObject,
    useContext,
    useRef,
} from "react";

interface ITopRefCtx {
    topRef: MutableRefObject<HTMLDivElement | null>;
    scrollToTop: () => void;
}

const TopRefCtx = createContext<ITopRefCtx | undefined>(undefined);

const useTopRefCtx = (): ITopRefCtx => {
    const ctx = useContext(TopRefCtx);

    if (!ctx) {
        throw new Error();
    }

    return ctx;
};

const TopRefCtxProvider = ({ children }: { children: ReactNode }) => {
    const topRef = useRef<HTMLDivElement | null>(null);

    const scrollToTop = () => {
        topRef?.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <TopRefCtx.Provider
            value={{
                topRef,
                scrollToTop,
            }}
        >
            {children}
        </TopRefCtx.Provider>
    );
};

export { TopRefCtxProvider, useTopRefCtx };
