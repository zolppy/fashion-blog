"use client";

import { useState } from "react";
import Image from "next/image";
import { IPost } from "@/app/mock/posts";
import Paragraph from "@/app/components/Paragraph";
import LikeButton from "@/app/components/LikeButton";
import RepliesButton from "@/app/components/RepliesButton";
import Reply from "../Reply";

const Post = ({
    title,
    description,
    date,
    imagePath,
    imageAlt,
    imageTitle,
    paragraphs,
    replies,
}: Omit<IPost, "id">) => {
    const [repliesIsVisible, setRepliesIsVisible] = useState<boolean>();

    const toggleRepliesIsVisible = () => {
        setRepliesIsVisible((prevRepliesIsVisible) => !prevRepliesIsVisible);
    };

    return (
        <article className="bg-white p-6 text-center flex flex-col gap-y-4">
            <h2 className="text-3xl uppercase">{title}</h2>
            <p className="text-lg">{description}</p>
            <span className="text-gray-500">{date}</span>
            <Image
                src={imagePath}
                alt={imageAlt}
                title={imageTitle}
                className="w-full"
            />
            {paragraphs?.map(({ id, content }) => (
                <Paragraph key={id}>{content}</Paragraph>
            ))}
            <div className="flex justify-between">
                <LikeButton />
                <RepliesButton
                    repliesTotal={replies.length}
                    handleModalIsVisible={toggleRepliesIsVisible}
                />
            </div>
            <div>
                {repliesIsVisible && replies.length && (
                    <hr className="my-4"></hr>
                )}
                <ul className="flex flex-col gap-y-8">
                    {repliesIsVisible &&
                        replies?.map(
                            ({
                                id,
                                name,
                                time,
                                comment,
                                imagePath,
                                imageAlt,
                                imageTitle,
                            }) => (
                                <Reply
                                    key={id}
                                    name={name}
                                    time={time}
                                    comment={comment}
                                    imagePath={imagePath}
                                    imageAlt={imageAlt}
                                    imageTitle={imageTitle}
                                />
                            )
                        )}
                </ul>
            </div>
        </article>
    );
};

export default Post;
