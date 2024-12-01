import { Open_Sans, Oswald } from "next/font/google";

const openSans = Open_Sans({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});

const oswald = Oswald({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});

export { openSans, oswald };
