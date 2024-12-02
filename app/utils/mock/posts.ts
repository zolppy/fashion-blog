import type IPost from "@/app/utils/interfaces/post";
import girlHat from "@/public/girl-hat.jpg";
import manHat from "@/public/man-hat.jpg";
import smoke from "@/public/avatar-smoke.jpg";
import girlTrain from "@/public/girl-train.jpg";
import girl from "@/public/girl.jpg";
import runway from "@/public/runway.jpg";
import girlMountain from "@/public/girl-mountain.jpg";
import boy from "@/public/boy.jpg";
import girlHood from "@/public/girl-hood.jpg";

const posts: IPost[] = [
    {
        id: 1,
        postTitle: "Title Heading",
        description: "Lorem ipsum dolor sit amet",
        date: "May 2, 2016",
        img: {
            src: girlHat,
            alt: "Woman wearing a hat. There is a sea in the background.",
            imgTitle: "Girl Hat",
        },
        paragraphs: [
            {
                id: 1,
                content:
                    "More Hats! I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
            },
            {
                id: 2,
                content:
                    "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            },
        ],
        replies: [
            {
                id: 1,
                name: "George",
                time: "May 3, 2015, 6:32 PM",
                comment: [
                    {
                        id: 1,
                        content: "Great blog post! Following",
                    },
                ],
                img: {
                    src: smoke,
                    alt: "A man wearing a black jacket and smoking",
                    imgTitle: "George",
                },
            },
        ],
    },
    {
        id: 2,
        postTitle: "Title Heading",
        description: "Lorem ipsum dolor sit amet",
        date: "April 23, 2016",
        img: {
            src: manHat,
            alt: "Black man wearing black hat, glasses and dress shirt.",
            imgTitle: "Man Hat",
        },
        paragraphs: [
            {
                id: 1,
                content:
                    "More Hats! I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
            },
            {
                id: 2,
                content:
                    "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            },
        ],
        replies: [
            {
                id: 1,
                name: "Amber",
                time: "April 26, 2015, 10:52 PM",
                comment: [
                    {
                        id: 1,
                        content:
                            "Love your blog page! Simply the best! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },
                ],
                img: {
                    src: girlTrain,
                    alt: "Lorem ipsum dolor sit amet consectetur",
                    imgTitle: "Lorem ipsum",
                },
            },
            {
                id: 2,
                name: "Angie",
                time: "April 23, 2015, 9:12 PM",
                comment: [
                    {
                        id: 1,
                        content: "Love hats!!",
                    },
                ],
                img: {
                    src: girl,
                    alt: "Lorem ipsum dolor sit amet consectetur",
                    imgTitle: "Lorem ipsum",
                },
            },
        ],
    },
    {
        id: 3,
        postTitle: "Title Heading",
        description: "Lorem ipsum dolor sit amet",
        date: "April 7, 2016",
        img: {
            src: runway,
            alt: "Lorem ipsum dolor sit amet consectetur",
            imgTitle: "Lorem ipsum",
        },
        paragraphs: [
            {
                id: 1,
                content:
                    "Dont miss! The runway in New York City this weekend is gonna be legendary!",
            },
            {
                id: 2,
                content:
                    "Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
            },
        ],
        replies: [
            {
                id: 1,
                name: "Jane",
                time: "April 10, 2015, 7:22 PM",
                comment: [
                    {
                        id: 1,
                        content:
                            "That was a great runway show! Thanks for everything.",
                    },
                ],
                img: {
                    src: girlMountain,
                    alt: "Lorem ipsum dolor sit amet consectetur",
                    imgTitle: "Jane",
                },
            },
            {
                id: 2,
                name: "John",
                time: "April 8, 2015, 10:32 PM",
                comment: [
                    {
                        id: 1,
                        content:
                            "Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    },
                ],
                img: {
                    src: boy,
                    alt: "Lorem ipsum dolor sit amet consectetur",
                    imgTitle: "John",
                },
            },
            {
                id: 3,
                name: "Anja",
                time: "April 7, 2015, 9:12 PM",
                comment: [
                    {
                        id: 1,
                        content: "Cant wait for the runway to start!",
                    },
                ],
                img: {
                    src: girlHood,
                    alt: "Lorem ipsum dolor sit amet consectetur",
                    imgTitle: "Anja",
                },
            },
        ],
    },
];

export default posts;
