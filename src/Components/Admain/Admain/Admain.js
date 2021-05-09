import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import AddAdmainProduct from "../AddAdmainProduct/AddAdmainProduct";

const Admain = () => {
  const onSubmit = (data) => console.log(data);
  return (
    <div className="row " style={{ background: "#f4fdfb" }}>
      <div className="col-md-5">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-7 ">
        <AddAdmainProduct onSubmit={onSubmit}></AddAdmainProduct>
      </div>
    </div>
  );
};

export default Admain;
