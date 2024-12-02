import { ReactNode } from "react";
import {
    BsFacebook,
    BsInstagram,
    BsSnapchat,
    BsPinterest,
    BsTwitter,
    BsLinkedin,
    BsSearch,
} from "react-icons/bs";

interface IButton {
    children: ReactNode;
}

const Button = ({ children }: IButton) => {
    return (
        <button className="px-4 py-3 active:bg-gray-400 active:text-black lg:hover:bg-gray-400 lg:hover:text-black lg:transition-colors lg:duration-300">
            {children}
        </button>
    );
};

const Header = () => {
    return (
        <header className="hidden md:flex bg-black text-white justify-between">
            <div className="inline-flex">
                <Button>
                    <BsFacebook className="text-sm" />
                </Button>
                <Button>
                    <BsInstagram className="text-sm" />
                </Button>
                <Button>
                    <BsSnapchat className="text-sm" />
                </Button>
                <Button>
                    <BsPinterest className="text-sm" />
                </Button>
                <Button>
                    <BsTwitter className="text-sm" />
                </Button>
                <Button>
                    <BsLinkedin className="text-sm" />
                </Button>
            </div>
            <Button>
                <BsSearch />
            </Button>
        </header>
    );
};

export default Header;
