import TopButton from "@/app/components/TopButton";
import { openSans } from "@/app/utils/font";

const Footer = () => {
  return (
    <footer
      className={`${openSans.className} bg-neutral-600 p-8 flex flex-col gap-y-4`}
    >
      <TopButton />
      <p className="text-white">
        Powered by{" "}
        <a
          href="https://github.com/zolppy"
          target="_blank"
          className="underline"
        >
          Zolppy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
