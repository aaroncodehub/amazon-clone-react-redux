import React, { useState, useEffect } from "react";
import { db } from "../../firebase.utils";
import { selectUser } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import Order from "./../../components/order/Order";
import Spinner from "react-bootstrap/Spinner";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    let mounted = true;
    if (user && mounted) {
      db.collection("amazonUsers")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          if (mounted) {
            setOrders(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            );
          }
        });
    } else {
      setOrders([]);
    }
    return () => (mounted = false);
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders ? (
          orders.map((order) => <Order order={order} key={order.id} />)
        ) : (
          <Spinner
            animation="border"
            role="status"
            className="main-layout__spainner"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
      </div>
    </div>
  );
};

export default Orders;
