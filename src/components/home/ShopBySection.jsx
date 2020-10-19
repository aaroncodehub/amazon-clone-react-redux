import React from "react";
import SharedCard from "../card/Card";
import { Card, Button } from "react-bootstrap";

const homeShop = [
  {
    id: 100,
    title: "Shop by category",
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg",
    linkInfo: "see more",
  },
  {
    id: 101,
    title: "AmazonBasics",
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2019/img/Certified_Refurbished/XCM_Manual_1170890_desktop_tiles_260x260_Certified_Refurbished_XCM_Manual_1170890_us_certified_refurbished_desktop_tiles_260x260_2_1557752691_jpg._CB464246644_SY260_.jpg",
    linkInfo: "see more",
  },
  {
    id: 102,
    title: "Electronics",
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2019/NewGCs/New/NewGCs_catcard_260x260_amazon_egc_1._CB438911828_SY260_.jpg",
    linkInfo: "see more",
  },
];

const ShopBySection = () => {
  return (
    <div className="shop-by-section">
      {homeShop.map(({ id, ...props }) => (
        <SharedCard key={id} {...props} />
      ))}

      <Card className="shop-by-section__user">
        <Card.Body>
          <Card.Title>Sign in for the best experience</Card.Title>
          <Button block className="shop-by-section__user__button">
            Sign in securely
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShopBySection;
