import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext, userOrderContext } from "../../../App";
import ProcessPayment from "../../ProcessPayment/ProcessPayment/ProcessPayment";

const YourSelcOrder = () => {
  const [selcOrder, setSelcOrder] = useContext(userOrderContext);
  const [loginUser, setLoginUser] = useContext(UserContext);
  /////////
  const [orderData, setOrderData] = useState([]);
  //////////
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setOrderData(data);
  };
  ////..............//////

  const handelpaymentSuccess = (paymentId) => {
    const datas = {
      ...selcOrder,
      ...loginUser,
      ...orderData,
      paymentId,
    };
    console.log("datas", datas);

    fetch("https://morning-sea-22549.herokuapp.com/addOrder", {
      method: "POST",
      body: JSON.stringify(datas),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  /////////

  // const datas = {
  //   ...selcOrder,
  //   ...loginUser,
  //   ...orderData,
  // };
  // console.log("datas", datas);

  //////////

  ///////
  // fetch("https://morning-sea-22549.herokuapp.com/addOrder", {
  //   method: "POST",
  //   body: JSON.stringify(datas),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
  // };
  ////////////////

  ////////////////
  return (
    <div>
      <div
      // style={{ display: orderData ? "block" : "none" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("clientName", { required: true })}
            defaultValue={loginUser.loginUserName}
            className="form-control w-75 mt-5"
            placeholder="Your Name"
          />

          {errors.clientName && <span>Name is required</span>}
          <br />
          <input
            type="tex"
            {...register("clientEmail", { required: true })}
            defaultValue={loginUser.loginUserEmail}
            className="form-control w-75"
            placeholder="Your Email Address"
          />

          {errors.clientEmail && <span>This field is required</span>}
          <br />
          <input
            type="tex"
            {...register("orderName", { required: true })}
            defaultValue={selcOrder.orderName}
            className="form-control w-75"
            placeholder="Your Order Name"
            style={{
              padding: "26px 10px",
            }}
          />

          {errors.orderName && <span>This field is required</span>}
          <br />
          <input
            type="tex"
            {...register("clientAddress", { required: true })}
            className="form-control w-75"
            placeholder="Your Address"
            style={{
              paddingTop: " 22px",
              paddingBottom: "70px",
              paddingRight: "15px",
            }}
          />

          {errors.clientAddress && <span>This field is required</span>}
          <br />

          <input type="submit" style={{ display: "none" }} />
        </form>
      </div>
      <div
        // style={{ display: orderData ? "none" : "block" }}
        className="mt-3 mb-3 w-75"
      >
        <h5 style={{ color: "green", padding: "20px 5px" }}>
          Please pay for me
        </h5>
        <ProcessPayment
          handelpaymentSuccess={handelpaymentSuccess}
        ></ProcessPayment>
      </div>
    </div>
  );
};

export default YourSelcOrder;
