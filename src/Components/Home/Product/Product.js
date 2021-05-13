import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userOrderContext } from "../../../App";
import "./Product.css";
/////////
import AOS from "aos";
import "aos/dist/aos.css";
/////////
const Product = ({ pro }) => {
  const [selcOrder, setSelcOrder] = useContext(userOrderContext);
  console.log("selcOrder", selcOrder);
  // const [ourSelcPrd, setOurSelcPrd] = useState({});
  // console.log("ourSelcPrd", ourSelcPrd);
  // const handelAddToCart = (data) => {
  //   console.log(data);
  //   // const ourPrd = { ...ourSelcPrd, data };
  //   // setOurSelcPrd(ourPrd);
  //   ////////////
  //   fetch("https://morning-sea-22549.herokuapp.com/addOrder", {
  //     method: "POST",
  //     body: JSON.stringify(ourPrd),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // };
  ////////////

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  /////////////
  return (
    <div className="d-flex " data-aos="fade-up">
      <div
        className="row"
        style={{
          background: "#b3780bc4",
          width: "100%",
          boxShadow: "5px 5px 10px gray",
          margin: "20px",
          padding: "20px 0px",
        }}
      >
        <div
          className="col-md-2"
          style={{
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "20px",
            paddingRight: "30px",
          }}
        >
          <img src={pro.image} alt="" style={{ width: "100%" }} />
        </div>

        <div className="col-md-9">
          <h4>{pro.name}</h4>
          <h3>Price : ${pro.price}</h3>
          <Link to="/order">
            <button
              onClick={() =>
                setSelcOrder({
                  ...selcOrder,
                  orderName: pro.name,

                  orderImg: pro.image,
                  orderPrice: pro.price,
                })
              }
              // onClick={() => handelBuyNow(srvsData)}
              className="buttons"
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ fontSize: "15px", paddingRight: "2px" }}
              />{" "}
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
