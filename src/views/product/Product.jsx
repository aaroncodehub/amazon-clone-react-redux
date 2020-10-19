import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProduct } from "../../redux/productSelector";
import { ReactComponent as AddToCart } from "../../assets/add_shopping_cart.svg";
import { addItem } from "../../redux/cartSlice";

const Product = () => {

  const dispatch = useDispatch();
  const { productId } = useParams();
  const { imgUrl, brand, title, price, count, rate, active } = useSelector((state) =>
    selectProduct(state, productId)
  );

  const formatedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="product">
      <div className="img-gallery">
        <img src={imgUrl} alt={brand} />
      </div>
      <div className="product__description">
        <div className="product__description__title">{title}</div>
        <div className="product__description__brand">
          <span>Brand: </span>
          {brand}
        </div>
        <div className="product__description__price">
          <span>Price: </span> <span>{formatedPrice}</span>
        </div>
        <div className="product__description__line" />
        <div className="product__description__content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          ullam, dolorum libero laudantium aut et nam accusamus debitis dolore
          velit blanditiis voluptates nihil doloremque nostrum consequuntur<br/><br/>
          dignissimos hic exercitationem nesciunt! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eligendi ullam, dolorum libero
          laudantium aut et nam accusamus debitis dolore velit blanditiis
          voluptates nihil doloremque nostrum consequuntur dignissimos hic
          exercitationem nesciunt!<br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          ullam, dolorum libero laudantium aut et nam accusamus debitis dolore
          velit blanditiis voluptates nihil doloremque nostrum consequuntur
          dignissimos hic exercitationem nesciunt! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eligendi ullam, dolorum libero
          laudantium aut et nam accusamus debitis dolore velit blanditiis
          voluptates nihil doloremque nostrum consequuntur dignissimos hic
          exercitationem nesciunt!
          <br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          ullam, dolorum libero laudantium aut et nam accusamus debitis dolore
          velit blanditiis voluptates nihil doloremque nostrum consequuntur
          dignissimos hic exercitationem nesciunt! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eligendi ullam, dolorum libero
          laudantium aut et nam accusamus debitis dolore velit blanditiis
          voluptates nihil doloremque nostrum consequuntur dignissimos hic
          exercitationem nesciunt!
        </div>
      </div>
      <div className="product__cart">
        <div className="product__cart__price">{formatedPrice}</div>
        <div className="product__cart__button">
          <Button block className="checkout__subtotal__button" onClick={() => dispatch((addItem({ title, price, count, imgUrl, rate, productId,active })))}>
            <AddToCart /> <span>Add to Cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
