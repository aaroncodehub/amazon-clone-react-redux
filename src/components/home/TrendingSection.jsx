import React from "react";
import SharedCarousel from "../carousel/Carousel";
import { v4 as uuid } from 'uuid';

const discovers = [
  {
    id: uuid(),
    title: "Trending in Video Games",
    linkInfo:"Shop now",
    imgs: [
      {
        id:uuid(),
        imgUrl:
          "https://m.media-amazon.com/images/I/31pEe2taIPL._AC_SY200_.jpg",
        alt: "language",
      },
      {
        id:uuid(),
        imgUrl:
          " https://m.media-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg",
        alt: "Currency",
      },
      {
        id:uuid(),
        imgUrl:
          "https://m.media-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg",
        alt: "Bubble",
      },
      {
        id:uuid(),
        imgUrl:
          " https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_SY200_.jpg",
        alt: "Bubble",
      },
      {
        id:uuid(),
        imgUrl:
          " https://m.media-amazon.com/images/I/517J1Mfca0L._AC_SY200_.jpg",
        alt: "Bubble",
      },
      {
        id:uuid(),
        imgUrl:
          " https://m.media-amazon.com/images/I/51TucFenMAL._AC_SY200_.jpg",
        alt: "Bubble",
      },
    ],
  },
];

const TrendingSection = () => {
  return (
    <div className="trendingSection">
      {discovers.map(({ id, ...props }) => (
        <SharedCarousel key={id} {...props} />
      ))}
    </div>
  );
};

export default TrendingSection;
