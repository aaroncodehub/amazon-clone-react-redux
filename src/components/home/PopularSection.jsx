import React from "react";
import SharedCarousel from "../carousel/Carousel";

const popular = [
  {
    id: 100,
    title: "Popular Gifts in Baby",
    linkInfo:"Shop now",
    imgs: [
      {
        id: 1,
        imgUrl:
          " https://m.media-amazon.com/images/I/51P-3iHitqL._AC_SY200_.jpg",
        alt: "language",
      },
      {
        id: 2,
        imgUrl:
          " https://m.media-amazon.com/images/I/51lgvdqrU-L._AC_SY200_.jpg",
        alt: "Currency",
      },
      {
        id: 3,
        imgUrl:
          " https://m.media-amazon.com/images/I/41kuRv+XpwL._AC_SY200_.jpg",
        alt: "Bubble",
      },
      {
        id: 4,
        imgUrl:
          " https://m.media-amazon.com/images/I/51ToPrd3XgL._AC_SY200_.jpg",
        alt: "Bubble",
      },
      {
        id: 5,
        imgUrl:
          " https://m.media-amazon.com/images/I/51H-kibj7KL._AC_SY200_.jpg",
        alt: "Bubble",
      },
      {
        id: 6,
        imgUrl:
          " https://m.media-amazon.com/images/I/41Iuq75ia9L._AC_SY200_.jpg",
        alt: "Bubble",
      },
    ],
  },
];

const PopularSection = () => {
  return (
    <div className="discover">
      {popular.map(({ id, ...props }) => (
        <SharedCarousel key={id} {...props} />
      ))}
    </div>
  );
};

export default PopularSection;
