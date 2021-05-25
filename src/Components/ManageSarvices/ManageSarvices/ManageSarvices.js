import React, { useEffect, useState } from "react";
import SideNavbar from "../../SideNavbar/SideNavbar";
import ManageSarvicesDetails from "../ManageSarvicesDetails/ManageSarvicesDetails";

const ManageSarvices = () => {
  const [manageAllSarvices, setManageAllSarvices] = useState([]);
  console.log("manageAllSarvices", manageAllSarvices._id);
  useEffect(() => {
    fetch("https://morning-sea-22549.herokuapp.com/ourProducts")
      .then((res) => res.json())
      .then((data) => {
        setManageAllSarvices(data);
      });
  }, []);
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
            <ManageSarvicesDetails
              manageAllSarvices={manageAllSarvices}
            ></ManageSarvicesDetails>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSarvices;
