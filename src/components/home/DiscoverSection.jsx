import React from "react";
import SharedCarousel from "../carousel/Carousel";

const discovers = [
  {
    id: 100,
    title: "Discover Amazon",
    linkInfo:"Click to learn more",
    imgs: [
      {
        id: 1,
        imgUrl:
          " https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png",
        alt: "language",

      },
      {
        id: 2,
        imgUrl:
          " https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg",
        alt: "Currency",
      },
      {
        id: 3,
        imgUrl:
          " https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg",
        alt: "Bubble",
      },
      {
        id: 4,
        imgUrl:
          " https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg",
        alt: "Bubble",
      },
      {
        id: 5,
        imgUrl:
          " https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg",
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

const DiscoverSection = () => {
  return (
    <div className="discoverSection">
      {discovers.map(({ id, ...props }) => (
        <SharedCarousel key={id} {...props} />
      ))}
    </div>
  );
};

export default DiscoverSection;
