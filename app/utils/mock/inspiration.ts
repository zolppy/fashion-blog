import type IInspiration from "@/app/utils/interfaces/inspiration";
import jeansDisplay from "@/public/folded-jeans-display.jpg";
import vintageHat from "@/public/woman-with-vintage-hat.jpg";
import closeTheSea from "@/public/woman-close-of-sea.jpg";
import lookingSky from "@/public/looking-sky.jpg";

const inspirations: IInspiration[] = [
    {
        id: 1,
        img: {
            src: jeansDisplay,
            alt: "Folded jeans set on display, highlighting casual style.",
            imgTitle: "Denim Fashion: Classic and Timeless",
        },
    },
    {
        id: 2,
        img: {
            src: vintageHat,
            alt: "Woman wearing vintage style hat on a neutral background.",
            imgTitle: "Classic Style with Hat",
        },
    },
    {
        id: 3,
        img: {
            src: closeTheSea,
            alt: "Woman wearing a black hat and a pink blouse, close of sea.",
            imgTitle: "Close of Sea",
        },
    },
    {
        id: 4,
        img: {
            src: lookingSky,
            alt: "Black man wearing sunglasses, looking for sky",
            imgTitle: "Looking sky",
        },
    },
];

export default inspirations;
