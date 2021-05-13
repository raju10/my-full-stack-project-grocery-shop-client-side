import React, { useEffect, useState } from "react";
import Sidebar from "../../../Sidebar/Sidebar";
import SideNavbar from "../../../SideNavbar/SideNavbar";
import AllOrderListDetls from "../AllOrderListDetls/AllOrderListDetls";

const AllOrderList = () => {
  const [allOrderList, setAllOrderList] = useState([]);
  useEffect(() => {
    fetch("https://morning-sea-22549.herokuapp.com/ourAllOrder")
      .then((res) => res.json())
      .then((data) => {
        setAllOrderList(data);
      });
  }, []);
  return (
    <div>
      <SideNavbar></SideNavbar>
      <div className=" row ">
        <div
          className="col-md-11 p-4 pr-5"
          style={{
            position: "absolute",
            right: 0,
            backgroundColor: "#F4FDFB",
          }}
        >
          <h5 className="text-brand">All Orders</h5>

          <AllOrderListDetls allOrderList={allOrderList}></AllOrderListDetls>
        </div>
      </div>
    </div>
  );
};

export default AllOrderList;
