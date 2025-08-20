import type IParagraph from "@/app/utils/interfaces/paragraph";
import type IImg from "@/app/utils/interfaces/img";

interface IReply {
  id: number;
  name: string;
  time: string;
  comment: IParagraph[];
  img: IImg;
}

export default IReply;
