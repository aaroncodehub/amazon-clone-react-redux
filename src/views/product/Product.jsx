import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { useParams,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProduct } from "../../redux/productSelector";
import { ReactComponent as AddToCart } from "../../assets/add_shopping_cart.svg";
import { addItem } from "../../redux/cartSlice";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const {
    imgUrl,
    brand,
    title,
    price,
    count,
    rate,
    active,
    description,
    gallery,
  } = useSelector((state) => selectProduct(state, productId));

  const formatedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const descriptions = description.split(";");
  const handleShopCart = () => {
    dispatch(
      addItem({
        title,
        price,
        count,
        imgUrl,
        rate,
        productId,
        active,
      })
    )
    Modal.confirm({
      title: 'Product added to your cart',
      icon: <ExclamationCircleOutlined />,
      content: `You've added the ${title} to your cart`,
      okText: 'Continue Shopping',
      cancelText: 'Proceed to Checkout',
      onOk:()=> navigate('/shop'),
      onCancel:()=> navigate('/checkout')
    });
}
  return (
    <div className="product">
      <div className="product__gallery">
        <ImageGallery
          items={gallery}
          showNav={false}
          thumbnailPosition={"left"}
          showPlayButton={false}
        />
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
          <ul>
            {descriptions.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="product__cart">
        <div className="product__cart__price">{formatedPrice}</div>
        <div className="product__cart__button">
          <Button
            block
            className="checkout__subtotal__button"
            onClick={handleShopCart}
          >
            <AddToCart /> <span>Add to Cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
