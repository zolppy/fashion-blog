import { StaticImageData } from "next/image";
import smoke from "@/public/avatar-smoke.jpg";
import bandMember from "@/public/band-member.jpg";
import workshop from "@/public/workshop.jpg";

export interface IPopularPost {
    id: number;
    title: string;
    description: string;
    imgPath: StaticImageData;
    imgAlt: string;
    imgTitle: string;
}

const popularPosts: IPopularPost[] = [
    {
        id: 1,
        title: "Denim",
        description: "Sed mattis nunc",
        imgPath: smoke,
        imgAlt: "Lorem ipsum dolor sit amet consectetur",
        imgTitle: "Lorem ispum",
    },
    {
        id: 2,
        title: "Sweaters",
        description: "Praes tinci sed",
        imgPath: bandMember,
        imgAlt: "Lorem ipsum dolor sit amet consectetur",
        imgTitle: "Lorem ispum",
    },
    {
        id: 3,
        title: "Workshop",
        description: "Ultricies congue",
        imgPath: workshop,
        imgAlt: "Lorem ipsum dolor sit amet consectetur",
        imgTitle: "Lorem ispum",
    },
    {
        id: 4,
        title: "Trends",
        description: "Lorem ipsum dipsum",
        imgPath: smoke,
        imgAlt: "Lorem ipsum dolor sit amet consectetur",
        imgTitle: "Lorem ispum",
    },
];

export default popularPosts;
