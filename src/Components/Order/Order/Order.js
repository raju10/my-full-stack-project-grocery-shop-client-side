import React from "react";
import ClientSideNavbar from "../../ClientSideNavbar/ClientSideNavbar";
import ClientSidebar from "../../Sidebar/ClientSidebar/ClientSidebar";
import Sidebar from "../../Sidebar/Sidebar";
import YourSelcOrder from "../YourSelcOrder/YourSelcOrder";
import YourOrder from "./YourOrder/YourOrder";

const Order = () => {
  return (
    <div>
      <section>
        <div>
          <ClientSideNavbar></ClientSideNavbar>
        </div>
        <div className="row " style={{ background: "#f4fdfb" }}>
          {/* <ClientSidebar></ClientSidebar> */}
          <div
            className="d-flex justify-content-center"
            style={{ paddingLeft: "80px" }}
          >
            <div className="col-md-10 ">
              <YourSelcOrder></YourSelcOrder>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
