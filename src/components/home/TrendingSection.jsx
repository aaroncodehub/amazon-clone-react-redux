import React from "react";
import SharedCarousel from "../carousel/Carousel";

const discovers = [
  {
    id: 100,
    title: "Trending in Video Games",
    linkInfo:"Shop now",
    imgs: [
      {
        id: 1,
        imgUrl:
          "https://m.media-amazon.com/images/I/31pEe2taIPL._AC_SY200_.jpg",
        alt: "language",
      },
      {
        id: 2,
        imgUrl:
          " https://m.media-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg",
        alt: "Currency",
      },
      {
        id: 3,
        imgUrl:
          "https://m.media-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg",
        alt: "Bubble",
      },
      {
        id: 4,
        imgUrl:
          " https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_SY200_.jpg",
        alt: "Bubble",
      },
      {
        id: 5,
        imgUrl:
          " https://m.media-amazon.com/images/I/517J1Mfca0L._AC_SY200_.jpg",
        alt: "Bubble",
      },
      {
        id: 6,
        imgUrl:
          " https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg",
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
