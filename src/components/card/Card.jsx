import React from "react";
import { Card, Button } from "react-bootstrap";

const SharedCard = ({ title, imgUrl, linkInfo }) => {
  return (
    <div>
      <Card className="card">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={imgUrl} />
          <Button variant="link">{linkInfo}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SharedCard;
