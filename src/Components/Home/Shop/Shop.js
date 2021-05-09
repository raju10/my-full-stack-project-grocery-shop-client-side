import React, { useEffect, useState } from "react";
import fakedata from "../../../fakeData";
import { addToDatabaseCart } from "../../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
const Shop = () => {
  const myData = fakedata;
  const [product, setProduct] = useState([]);
  console.log(product);
  useEffect(() => {
    fetch("http://localhost:4000/ourProduct")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  ////////
  // const [cart, setCart] = useState([]);
  // console.log(cart);
  // const handelAddToCart = (pd) => {
  //   console.log(pd);
  //   const newCart = [...cart, pd];
  //   setCart(newCart);
  // const samePrd = newCart.filter((prd) => prd.key === pd.key);
  // const count = samePrd.length;
  // addToDatabaseCart(pd.key, count);
  // };
  ///////////////////

  return (
    <div className="container">
      <div className="row d-flex justify-content-between ">
        <div className="col-md-12 " style={{ border: "1px solid gray" }}>
          {product.map((pro) => (
            <Product pro={pro}></Product>
          ))}
        </div>
        {/* <div className="col-md-4">
        <Cart cart={cart}></Cart>
      </div> */}
      </div>
    </div>
  );
};

export default Shop;
