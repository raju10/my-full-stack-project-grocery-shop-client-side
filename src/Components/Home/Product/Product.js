import React, { useState } from "react";

const Product = ({ pro }) => {
  const [ourSelcPrd, setOurSelcPrd] = useState({});
  console.log("ourSelcPrd", ourSelcPrd);
  const handelAddToCart = (data) => {
    console.log(data);
    const ourPrd = { ...ourSelcPrd, data };
    setOurSelcPrd(ourPrd);
    ////////////
    fetch("http://localhost:4000/addOrder", {
      method: "POST",
      body: JSON.stringify(ourPrd),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div className="d-flex" style={{ borderBottom: "1px solid gray" }}>
      <div style={{ padding: "20px", width: "20%" }}>
        <img src={pro.image} alt="" className="w-100" />
      </div>
      <div>
        <h4>{pro.name}</h4>
        <h3>Price : ${pro.price}</h3>
        <button
          onClick={() => handelAddToCart(pro)}
          className="btn btn-success"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
