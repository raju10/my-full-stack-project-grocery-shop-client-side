import React, { useState } from "react";
import { Link } from "react-router-dom";
import OrderDetails from "../../OrderDetails/OrderDetails";

const Cart = ({ cart }) => {
  const carts = [...cart];
  console.log(carts);
  // const newCart = [...cart];
  // const newCart2 = newCart[0].price;
  // parseInt(newCart2);
  // console.log("newCart", newCart2);
  const [ourOrder, setOurOrder] = useState([]);
  console.log("ourOrder", ourOrder);
  const totalprice = cart.reduce((total, prd) => total + prd.price, 0);
  const handlOrderDetails = (pd) => {
    console.log(pd);
    setOurOrder(pd);
  };
  ///////////////////////
  fetch("https://morning-sea-22549.herokuapp.com/addOrder", {
    method: "POST",
    body: JSON.stringify(carts),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  return (
    <div>
      <h3>add cart : {cart.length}</h3>
      <h4>Total Price : {totalprice}</h4>
      <Link to="/review">
        <button onClick={() => handlOrderDetails(cart)}> Order Details</button>
      </Link>
    </div>
  );
};

export default Cart;
