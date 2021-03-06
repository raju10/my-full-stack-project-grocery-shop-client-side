import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import ClientSideNavbar from "../../ClientSideNavbar/ClientSideNavbar";
import ClientSidebar from "../../Sidebar/ClientSidebar/ClientSidebar";
import MyOrderBookingListDetls from "../MyOrderBookingListDetls/MyOrderBookingListDetls";

const MyOrderBookingList = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  const [myBookingOrderList, setMyBookingOrderList] = useState([]);
  // console.log(myBookingOrderList.length);
  useEffect(() => {
    fetch(
      "https://morning-sea-22549.herokuapp.com/ourOrder?loginUserEmail=" +
        loginUser.loginUserEmail
    )
      .then((res) => res.json())
      .then((data) => {
        setMyBookingOrderList(data);
      });
  }, []);
  return (
    <section>
      <div>
        <ClientSideNavbar></ClientSideNavbar>
      </div>
      {myBookingOrderList.length === 0 ? (
        <p style={{ textAlign: "center", paddingTop: "100px" }}>
          sorry, you can't booking any product...please book
        </p>
      ) : (
        <div className="row " style={{ background: "#f4fdfb" }}>
          {/* <ClientSidebar></ClientSidebar> */}
          <div className="d-flex justify-content-center">
            <div className="col-md-7 ">
              {myBookingOrderList.map((myOrder) => (
                <MyOrderBookingListDetls
                  myOrder={myOrder}
                ></MyOrderBookingListDetls>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyOrderBookingList;
