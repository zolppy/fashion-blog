import type IPopularPost from "@/app/utils/interfaces/popularPost";
import smokyAtmosphere from "@/public/man-in-smoky-atmosphere.jpg";
import bandMember from "@/public/band-member-fashion-shot.jpg";
import fashionWorkshop from "@/public/fashion-workshop.jpg";

const popularPosts: IPopularPost[] = [
  {
    id: 1,
    popularPostTitle: "Denim",
    description: "Sed mattis nunc",
    img: {
      src: smokyAtmosphere,
      alt: "Man in a dimly lit setting with smoke effects in the background.",
      imgTitle: "Dramatic Atmosphere with Smoke",
    },
  },
  {
    id: 2,
    popularPostTitle: "Sweaters",
    description: "Praes tinci sed",
    img: {
      src: bandMember,
      alt: "Band member posing with modern and casual clothing.",
      imgTitle: "Fashion and Music in Harmony",
    },
  },
  {
    id: 3,
    popularPostTitle: "Workshop",
    description: "Ultricies congue",
    img: {
      src: fashionWorkshop,
      alt: "Workshop setting focused on creativity and fashion design.",
      imgTitle: "Innovation in a Fashion Workshop",
    },
  },
  {
    id: 4,
    popularPostTitle: "Trends",
    description: "Lorem ipsum dipsum",
    img: {
      src: smokyAtmosphere,
      alt: "Man in a dimly lit setting with smoke effects in the background.",
      imgTitle: "Dramatic Atmosphere with Smoke",
    },
  },
];

export default popularPosts;
