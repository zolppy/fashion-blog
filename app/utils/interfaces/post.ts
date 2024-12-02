import type IImg from "@/app/utils/interfaces/img";
import type IParagraph from "@/app/utils/interfaces/paragraph";
import type IReply from "@/app/utils/interfaces/reply";

interface IPost {
    id: number;
    postTitle: string;
    description: string;
    date: string;
    img: IImg;
    paragraphs: IParagraph[];
    replies: IReply[];
}

export default IPost;
