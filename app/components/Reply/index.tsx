import type IReply from "@/app/utils/interfaces/reply";
import Image from "next/image";
import Paragraph from "../Paragraph";

const Reply = ({ name, time, comment, img }: Omit<IReply, "id">) => {
    const { src, alt, imgTitle } = img;

    return (
        <li className="flex flex-col gap-y-4 text-left">
            <div className="flex flex-col gap-y-2">
                <Image
                    src={src}
                    alt={alt}
                    title={imgTitle}
                    className="w-[90px]"
                />
                <p>
                    <span className="font-bold text-xl">{name}</span>{" "}
                    <span className="text-gray-500">{time}</span>
                </p>
            </div>
            {comment?.map(({ id, content }) => (
                <Paragraph key={id}>{content}</Paragraph>
            ))}
        </li>
    );
};

export default Reply;
