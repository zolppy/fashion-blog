import Image from "next/image";
import { IPopularPost } from "@/app/mock/popularPosts";

const PopularPost = ({
    title,
    description,
    imgPath,
    imgAlt,
    imgTitle,
}: Omit<IPopularPost, "id">) => {
    return (
        <li className="flex gap-x-4 p-4 active:bg-gray-400 lg:hover:cursor-pointer lg:hover:bg-gray-400 lg:transition-colors lg:duration-300">
            <Image
                src={imgPath}
                alt={imgAlt}
                title={imgTitle}
                className="w-[50px]"
            />
            <div>
                <h3 className="text-lg">{title}</h3>
                <p>{description}</p>
            </div>
        </li>
    );
};

export default PopularPost;
