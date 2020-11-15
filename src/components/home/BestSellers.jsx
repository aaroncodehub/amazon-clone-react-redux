import React from "react";
import SharedCarousel from "../carousel/Carousel";
import { v4 as uuid } from 'uuid';

const discovers = [
  {
    id:uuid(),
    title: "Best Sellers",
    linkInfo:"Shop now",
    imgs: [
      {
        id:uuid(),
        imgUrl:
          "https://m.media-amazon.com/images/I/31GbZBZ6UfL._AC_SY200_.jpg",
        alt: "language",
      },
      {
        id:uuid(),
        imgUrl:
          " https://m.media-amazon.com/images/I/31aYZs3ij5L._AC_SY200_.jpg",
        alt: "Currency",
      },
      {
        id:uuid(),
        imgUrl:
          "https://m.media-amazon.com/images/I/51XFpX+XFpL._AC_SY200_.jpg",
        alt: "Bubble",
      },
      {
        id:uuid(),
        imgUrl:
          " https://m.media-amazon.com/images/I/41MUBAPIW7L._AC_SY200_.jpg",
        alt: "Bubble",
      },
      {
        id:uuid(),
        imgUrl:
          " https://m.media-amazon.com/images/I/51SDyKBr-HL._AC_SY200_.jpg",
        alt: "Bubble",
      },
      {
        id:uuid(),
        imgUrl:
          " https://m.media-amazon.com/images/I/41jN4V0VJEL._AC_SY200_.jpg",
        alt: "Bubble",
      },
    ],
  },
];

const BestSellers = () => {
  return (
    <div className="bestSellers">
      {discovers.map(({ id, ...props }) => (
        <SharedCarousel key={id} {...props} />
      ))}
    </div>
  );
};

export default BestSellers;
