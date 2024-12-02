import type IImg from "@/app/utils/interfaces/img";

interface IPopularPost {
    id: number;
    popularPostTitle: string;
    description: string;
    img: IImg;
}

export default IPopularPost;
