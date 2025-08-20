import { ReactNode } from "react";

interface ISubscribeButton {
  children: ReactNode;
  openModal: () => void;
}

const SubscribeButton = ({ children, openModal }: ISubscribeButton) => {
  return (
    <button
      onClick={openModal}
      className="bg-gray-300 opacity-50 px-6 py-3 w-fit lg:transition-opacity lg:duration-300 lg:hover:opacity-100"
    >
      <span className="opacity-100 uppercase">{children}</span>
    </button>
  );
};

export default SubscribeButton;
