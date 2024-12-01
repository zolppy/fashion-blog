import T3Button from "@/app/components/T3Button/T3Button";
import { openSans } from "@/app/font";

const Footer = () => {
    return (
        <footer
            className={`${openSans.className} bg-neutral-600 p-8 flex flex-col gap-y-4`}
        >
            <T3Button />
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
