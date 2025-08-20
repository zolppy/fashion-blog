"use client";

import { useState } from "react";
import Image from "next/image";
import Paragraph from "@/app/components/Paragraph";
import LikeButton from "@/app/components/LikeButton";
import RepliesButton from "@/app/components/RepliesButton";
import Reply from "@/app/components/Reply";
import IPost from "@/app/utils/interfaces/post";

const Post = ({
  postTitle,
  description,
  date,
  img,
  paragraphs,
  replies,
}: Omit<IPost, "id">) => {
  const { src, alt, imgTitle } = img;
  const [repliesIsVisible, setRepliesIsVisible] = useState<boolean>();

  const toggleShowReplies = () => {
    setRepliesIsVisible((prevRepliesIsVisible) => !prevRepliesIsVisible);
  };

  return (
    <article className="bg-white p-6 text-center flex flex-col gap-y-4">
      <h2 className="text-3xl uppercase">{postTitle}</h2>
      <p className="text-lg">{description}</p>
      <span className="text-gray-500">{date}</span>
      <Image src={src} alt={alt} title={imgTitle} className="w-full" />
      {paragraphs?.map(({ id, content }) => (
        <Paragraph key={id}>{content}</Paragraph>
      ))}
      <div className="flex justify-between">
        <LikeButton />
        <RepliesButton
          repliesTotal={replies.length}
          handleModalIsVisible={toggleShowReplies}
        />
      </div>
      <div>
        {repliesIsVisible && replies.length && <hr className="my-4"></hr>}
        <ul className="flex flex-col gap-y-8">
          {repliesIsVisible &&
            replies?.map(({ id, name, time, comment, img }) => (
              <Reply
                key={id}
                name={name}
                time={time}
                comment={comment}
                img={img}
              />
            ))}
        </ul>
      </div>
    </article>
  );
};

export default Post;
