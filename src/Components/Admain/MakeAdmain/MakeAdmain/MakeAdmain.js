import React from "react";

import Sidebar from "../../../Sidebar/Sidebar";

import MakeAdmainInput from "../MakeAdmainInput/MakeAdmainInput";

const MakeAdmain = () => {
  return (
    <div className="row " style={{ background: "#f4fdfb" }}>
      <div className="col-md-5">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-7 ">
        <MakeAdmainInput></MakeAdmainInput>
      </div>
    </div>
  );
};

export default MakeAdmain;
