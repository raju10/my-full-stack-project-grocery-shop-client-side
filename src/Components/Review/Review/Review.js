import React from "react";
import ClientSideNavbar from "../../ClientSideNavbar/ClientSideNavbar";
import ClientSidebar from "../../Sidebar/ClientSidebar/ClientSidebar";
import ReviewDetails from "../ReviewDetails/ReviewDetails";

const Review = () => {
  return (
    <section>
      <div>
        <ClientSideNavbar></ClientSideNavbar>
      </div>
      <div className="row " style={{ background: "#f4fdfb" }}>
        <div
          class="d-flex justify-content-center"
          style={{ paddingLeft: "80px" }}
        >
          <div className="col-md-8 ">
            <ReviewDetails></ReviewDetails>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
