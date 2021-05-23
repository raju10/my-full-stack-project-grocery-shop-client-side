import React, { useEffect, useState } from "react";
import fakedata from "../../../fakeData";
import { addToDatabaseCart } from "../../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
/////////
import AOS from "aos";
import "aos/dist/aos.css";
/////////
const Shop = () => {
  //"https://morning-sea-22549.herokuapp.com/ourProduct?search=" + search
  const myData = fakedata;
  const [product, setProduct] = useState([]);
  const [search, setSerch] = useState("");
  const products = product.slice(0, 5);
  console.log(product);
  useEffect(() => {
    fetch("https://morning-sea-22549.herokuapp.com/ourProduct")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [search]);
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
  const handelSerch = (e) => {
    setSerch(e.target.value);
    console.log(e.target.value);
  };
  ////////////

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  /////////////
  return (
    <div className="container">
      <div
        data-aos="fade-right"
        style={{ padding: "50px 0px", textAlign: "center" }}
      >
        <input
          type="text"
          className="form-control w-75"
          placeholder="Search Your Product"
          style={{ display: "inline" }}
          onBlur={handelSerch}
        />
        <button className="buttons">search</button>
      </div>

      <div className="row d-flex justify-content-between ">
        <div className="col-md-12 ">
          {products.map((pro) => (
            <Product pro={pro}></Product>
          ))}
        </div>
        {/* <div className="col-md-4">
        <Cart cart={cart}></Cart>
      </div> .....*/}
      </div>
    </div>
  );
};

export default Shop;
