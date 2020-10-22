import React, { useState, useEffect } from "react";
import { db } from "../../firebase.utils";
import { selectUser } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import Order from './../../components/order/Order';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
        setOrders([])
    }
  }, [user]);
    
 
  return (
    <div className="orders">
          <h1>Your Orders</h1>
          <div className="orders__order">
              { 
                  orders?.map(order => (
                      <Order order={order} key={order.id}/>
                  ))
              }
          </div>
    </div>
  );
};

export default Orders;
