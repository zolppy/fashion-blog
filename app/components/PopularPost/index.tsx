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
        <li className="flex gap-x-4 p-4">
            <Image
                src={imgPath}
                alt={imgAlt}
                title={imgTitle}
                className="w-[50px]"
            />
            <div>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </li>
    );
};

export default PopularPost;
