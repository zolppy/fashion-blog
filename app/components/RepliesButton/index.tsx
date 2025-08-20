interface IRepliesButton {
  repliesTotal: number;
  handleModalIsVisible: () => void;
}

const RepliesButton = ({
  repliesTotal,
  handleModalIsVisible,
}: IRepliesButton) => {
  return (
    <button
      onClick={handleModalIsVisible}
      className="bg-black py-2 px-4 flex items-center gap-x-2 group active:bg-gray-400 lg:transition-colors lg:duration-300 lg:hover:bg-gray-400"
    >
      <p className="text-white active:text-black lg:group-hover:text-black">
        Replies
      </p>
      <div className="bg-white w-5 h-5 flex items-center justify-center text-xs">
        {repliesTotal}
      </div>
    </button>
  );
};

export default RepliesButton;
