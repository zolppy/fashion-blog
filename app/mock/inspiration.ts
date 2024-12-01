import { StaticImageData } from "next/image";
import jeans from "@/public/jeans.jpg";
import avatarHat from "@/public/avatar-hat.jpg";
import team1 from "@/public/team-1.jpg";
import team4 from "@/public/team-4.jpg";

interface IInspiration {
    id: number;
    imgPath: StaticImageData;
    imgAlt: string;
    imgTitle: string;
}

const inspirations: IInspiration[] = [
    {
        id: 1,
        imgPath: jeans,
        imgAlt: "Lorem ipsum dolor sit amet consectetur",
        imgTitle: "Lorem ipsum",
    },
    {
        id: 2,
        imgPath: avatarHat,
        imgAlt: "Lorem ipsum dolor sit amet consectetur",
        imgTitle: "Lorem ipsum",
    },
    {
        id: 3,
        imgPath: team1,
        imgAlt: "Lorem ipsum dolor sit amet consectetur",
        imgTitle: "Lorem ipsum",
    },
    {
        id: 4,
        imgPath: team4,
        imgAlt: "Lorem ipsum dolor sit amet consectetur",
        imgTitle: "Lorem ipsum",
    },
];

export default inspirations;
