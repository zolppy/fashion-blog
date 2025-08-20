import Image from "next/image";
import type IPopularPost from "@/app/utils/interfaces/popularPost";

const PopularPost = ({
  popularPostTitle,
  description,
  img,
}: Omit<IPopularPost, "id">) => {
  const { src, alt, imgTitle } = img;

  return (
    <li className="flex gap-x-4 p-4 active:bg-gray-400 lg:hover:cursor-pointer lg:hover:bg-gray-400 lg:transition-colors lg:duration-300">
      <Image src={src} alt={alt} title={imgTitle} className="w-[50px]" />
      <div>
        <h3 className="text-lg">{popularPostTitle}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default PopularPost;
