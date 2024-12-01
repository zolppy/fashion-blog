import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { oswald } from "@/app/font";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Fashion Blog",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque temporibus harum voluptates quos. Excepturi at, consequuntur eligendi labore eius corrupti ullam velit voluptas aliquid!",
    icons: "/favicon.ico",
    authors: [{ name: "Gabriel Cavalcante de Jesus Oliveira" }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${oswald.className} antialiased bg-[#f1f1f1]`}>
                {children}
            </body>
            <GoogleAnalytics gaId="G-BL0G7C98H9" />
        </html>
    );
}
