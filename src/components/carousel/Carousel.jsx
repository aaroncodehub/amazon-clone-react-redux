import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Button } from "react-bootstrap";
import "./Carousel.scss";
import RouterLink from "./../link/RouterLink";

const SharedCarousel = ({ title, imgs, alt, linkInfo }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <Card className="carousel">
      <Card.Body>
        <div className="carousel__title">
          <Card.Title>{title}</Card.Title>
          <RouterLink to="/shop">
            <Button variant="link" className="carousel__title__link">
              {linkInfo}
            </Button>
          </RouterLink>
        </div>
        <Slider {...settings}>
          {imgs.map((el, index) => (
            <div key={index}>
              <RouterLink to="/shop">
                <img
                  src={el.imgUrl}
                  alt={alt}
                  className="carousel__item__img"
                />
              </RouterLink>
            </div>
          ))}
        </Slider>
      </Card.Body>
    </Card>
  );
};

export default SharedCarousel;
