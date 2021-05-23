import React from "react";
import { Link } from "react-router-dom";

const MyOrderBookingListDetls = ({ myOrder }) => {
  console.log(myOrder);
  return (
    <div
      className="d-flex"
      style={{ paddingLeft: "60px" }}
      data-aos="fade-left"
    >
      <div className="row " style={{ borderBottom: "1px solid gray" }}>
        <div className="col-md-2" style={{ padding: "20px" }}>
          <img src={myOrder.orderImg} alt="" style={{ width: "100%" }} />
        </div>
        <div className="col-md-8" style={{ paddingLeft: "50px" }}>
          <h4>{myOrder.orderName}</h4>
          <h3>Price : ${myOrder.orderPrice}</h3>
        </div>
      </div>
    </div>
  );
};

export default MyOrderBookingListDetls;
