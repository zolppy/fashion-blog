import { RefObject } from "react";
import T3Button from "@/app/components/T3Button/T3Button";
import { openSans } from "@/app/font";

interface IFooter {
    scrollToSection: (ref: RefObject<HTMLElement>) => void;
    topRef: RefObject<HTMLElement>;
}

const Footer = ({ scrollToSection, topRef }: IFooter) => {
    return (
        <footer
            className={`${openSans.className} bg-neutral-600 p-8 flex flex-col gap-y-4`}
        >
            <T3Button scrollToSection={scrollToSection} topRef={topRef} />
            <p className="text-white">
                Powered by{" "}
                <a
                    href="https://github.com/zolppy"
                    target="_blank"
                    className="hover:underline"
                >
                    Zolppy
                </a>
            </p>
        </footer>
    );
};

export default Footer;
