import React from "react";

import Sidebar from "../../../Sidebar/Sidebar";
import SideNavbar from "../../../SideNavbar/SideNavbar";

import MakeAdmainInput from "../MakeAdmainInput/MakeAdmainInput";

const MakeAdmain = () => {
  return (
    <div>
      <SideNavbar></SideNavbar>

      <div
        className="row "
        style={{
          background: "#f4fdfb",
          paddingLeft: "60px",
          paddingTop: "20px",
        }}
      >
        <div className="d-flex justify-content-center">
          <div className="col-md-7 ">
            <MakeAdmainInput></MakeAdmainInput>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmain;
