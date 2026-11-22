export type GalleryPhoto = {
  src: string;
  alt: string;
  title: string;
  category: string;
};

export type GalleryVideo = {
  title: string;
  url: string;
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "/Ahati-decor2.jpg",
    alt: "Ethiopian bride holding a traditional fan",
    title: "Traditional celebration",
    category: "Traditions",
  },
  {
    src: "/Ahati-decor.jpg",
    alt: "White and peach flowers arranged for a wedding",
    title: "Wedding details",
    category: "Details",
  },
  {
    src: "/ahati_hero_image.png",
    alt: "Couple celebrating their Ethiopian wedding",
    title: "The happy couple",
    category: "Celebrations",
  },
  {
    src: "/Ahati-decor.webp",
    alt: "Bride wearing a floral hairpiece",
    title: "Bridal style",
    category: "Style",
  },
  {
    src: "/wedding catering.webp",
    alt: "Wedding catering prepared for a celebration",
    title: "A table for celebrating",
    category: "Catering",
  },
  {
    src: "/wedding-production.webp",
    alt: "Wedding event production setup",
    title: "The celebration in motion",
    category: "Production",
  },
  {
    src: "/wedding-car.jpg",
    alt: "Wedding car prepared for the couple",
    title: "The finishing touches",
    category: "Details",
  },
];

export const GALLERY_VIDEOS: GalleryVideo[] = [
  {
    title: "Ahati Wedding Film 01",
    url: "https://youtu.be/oOAUjB5Q5fE",
  },
  {
    title: "Ahati Wedding Film 02",
    url: "https://youtu.be/hChD8vmsGDE",
  },
];
