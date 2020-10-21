import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import CheckoutCard from "../../components/card/CheckoutCard";
import { selectCartItems } from "../../redux/cartSelector";
import { selectCartItemsCount, selectSubtotal } from "../../redux/cartSelector";
import { Link } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../../axios";

const Payment = () => {

  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const cartItems = useSelector((state) => selectCartItems(state));
  const cartCount = useSelector((state) => selectCartItemsCount(state));
  const subtotal = useSelector((state) => selectSubtotal(state));

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${subtotal * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [subtotal]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

      const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement)
        }
      }).then(({ paymentIntent }) => {
          // paymentIntent = payment confirmation
          setSucceeded(true)
          setError(null)
          setProcessing(false)
          navigate('/orders')
    })
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cartCount} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.name}</p>
            <p>22 porana rd </p>
            <p>Auckland , New Zealand</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>
              Review items <br />
              and delivery
            </h3>
          </div>
          <div className="payment__items">
            {cartItems.length > 0 &&
              cartItems.map(({ productId, ...props }) => (
                <div key={productId}>
                  <CheckoutCard productId={productId} {...props} />
                  <div className="checkout__cart__card" />
                </div>
              ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  value={subtotal}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={2}
                  prefix={"$"}
                  renderText={(value) => (
                    <div>
                      <h3>Order Total : {value}</h3>
                    </div>
                  )}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
