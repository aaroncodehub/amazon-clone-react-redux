import React from "react";
import { Card, Carousel, Button } from "react-bootstrap";

const SharedCarousel = ({ title, imgs, alt, linkInfo }) => {
  return (
    <Card className="carousel">
      <Card.Body> 
        <div className="carousel__title">
        <Card.Title>{title}</Card.Title>
        <Button variant="link" className="carousel__title__link">{linkInfo}</Button>
        </div>
        <Carousel>
          <Carousel.Item className="carousel__item">
            {imgs.map((el, index) => (
              <img
                src={el.imgUrl}
                alt={alt}
                key={index}
                className="carousel__item__img"
              />
            ))}
          </Carousel.Item>
        </Carousel>
      </Card.Body>
    </Card>
  );
};

export default SharedCarousel;
