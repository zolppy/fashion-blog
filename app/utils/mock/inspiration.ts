import type IInspiration from "@/app/utils/interfaces/inspiration";
import jeans from "@/public/jeans.jpg";
import avatarHat from "@/public/avatar-hat.jpg";
import team1 from "@/public/team-1.jpg";
import team4 from "@/public/team-4.jpg";

const inspirations: IInspiration[] = [
    {
        id: 1,
        img: {
            src: jeans,
            alt: "Lorem ipsum dolor sit amet consectetur",
            imgTitle: "Lorem ipsum",
        },
    },
    {
        id: 2,
        img: {
            src: avatarHat,
            alt: "Lorem ipsum dolor sit amet consectetur",
            imgTitle: "Lorem ipsum",
        },
    },
    {
        id: 3,
        img: {
            src: team1,
            alt: "Lorem ipsum dolor sit amet consectetur",
            imgTitle: "Lorem ipsum",
        },
    },
    {
        id: 4,
        img: {
            src: team4,
            alt: "Lorem ipsum dolor sit amet consectetur",
            imgTitle: "Lorem ipsum",
        },
    },
];

export default inspirations;
