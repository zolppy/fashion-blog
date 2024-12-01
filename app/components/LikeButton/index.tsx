"use client";

import { useState } from "react";
import { BsHandThumbsUpFill, BsCheckLg } from "react-icons/bs";

const LikeButton = () => {
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const handleToggleCheck = () => {
        setIsLiked((prevIsLiked) => !prevIsLiked);
    };

    return (
        <button
            onClick={handleToggleCheck}
            className="flex border py-2 px-4 items-center gap-x-1 hover:bg-gray-400 transition-colors duration-300"
        >
            {isLiked ? <BsCheckLg /> : <BsHandThumbsUpFill />}
            <p>{isLiked ? "Liked" : "Like"}</p>
        </button>
    );
};

export default LikeButton;
