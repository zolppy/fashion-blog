import type IPopularPost from "@/app/utils/interfaces/popularPost";
import smoke from "@/public/avatar-smoke.jpg";
import bandMember from "@/public/band-member.jpg";
import workshop from "@/public/workshop.jpg";

const popularPosts: IPopularPost[] = [
    {
        id: 1,
        popularPostTitle: "Denim",
        description: "Sed mattis nunc",
        img: {
            src: smoke,
            alt: "Lorem ipsum dolor sit amet consectetur",
            imgTitle: "Lorem ispum",
        },
    },
    {
        id: 2,
        popularPostTitle: "Sweaters",
        description: "Praes tinci sed",
        img: {
            src: bandMember,
            alt: "Lorem ipsum dolor sit amet consectetur",
            imgTitle: "Lorem ispum",
        },
    },
    {
        id: 3,
        popularPostTitle: "Workshop",
        description: "Ultricies congue",
        img: {
            src: workshop,
            alt: "Lorem ipsum dolor sit amet consectetur",
            imgTitle: "Lorem ispum",
        },
    },
    {
        id: 4,
        popularPostTitle: "Trends",
        description: "Lorem ipsum dipsum",
        img: {
            src: smoke,
            alt: "Lorem ipsum dolor sit amet consectetur",
            imgTitle: "Lorem ispum",
        },
    },
];

export default popularPosts;
