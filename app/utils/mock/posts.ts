import type IPost from "@/app/utils/interfaces/post";
import wideBrimHat from "@/public/woman-with-wide-brim-hat.jpg";
import manOutdoorHat from "@/public/man-stylish-outdoor-hat.jpg";
import smokyAtmosphere from "@/public/man-in-smoky-atmosphere.jpg";
import urbanTrain from "@/public/woman-urban-train-setting.jpg";
import womanPortrait from "@/public/elegant-woman-portrait.jpg";
import models from "@/public/model-walking-runway.jpg";
import mountainLandscape from "@/public/woman-mountain-landscape.jpg";
import outdoorStyle from "@/public/smiling-boy-outdoor-style.jpg";
import hood from "@/public/woman-with-hooded-coat.jpg";

const posts: IPost[] = [
    {
        id: 1,
        postTitle: "Title Heading",
        description: "Lorem ipsum dolor sit amet",
        date: "May 2, 2016",
        img: {
            src: wideBrimHat,
            alt: "Young woman with a wide-brimmed hat in an outdoor setting.",
            imgTitle: "Elegance with a Hat",
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
                    src: smokyAtmosphere,
                    alt: "Man in a dimly lit setting with smoke effects in the background.",
                    imgTitle: "Dramatic Atmosphere with Smoke",
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
            src: manOutdoorHat,
            alt: "Man wearing a hat and stylish clothes in an outdoor setting.",
            imgTitle: "Hat and Masculine Style",
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
                    src: urbanTrain,
                    alt: "Woman standing next to a train with urban and casual style.",
                    imgTitle: "Urban Style on the Move",
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
                    src: womanPortrait,
                    alt: "Portrait of a woman in a neutral background with an elegant look.",
                    imgTitle: "Simple Elegance",
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
            src: models,
            alt: "Model walking on a runway during a fashion show.",
            imgTitle: "Fashion in the Spotlight on the Runway",
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
                    src: mountainLandscape,
                    alt: "Young woman posing in a mountainous landscape, wearing comfortable clothing.",
                    imgTitle: "Fashion for Outdoor Adventures",
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
                    src: outdoorStyle,
                    alt: "Smiling boy outdoors wearing casual clothing.",
                    imgTitle: "Youth and Style",
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
                    src: hood,
                    alt: "Woman wearing a hooded coat on a cold day.",
                    imgTitle: "Style for Cold Days",
                },
            },
        ],
    },
];

export default posts;
