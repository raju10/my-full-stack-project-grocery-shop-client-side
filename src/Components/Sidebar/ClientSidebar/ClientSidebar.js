import React from "react";
import { Link } from "react-router-dom";
import "./ClientSidebar.css";
const ClientSidebar = () => {
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 "
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/order" className="text-black">
            <span>Book</span>
          </Link>
        </li>
        <li>
          <Link to="/home" className="text-black">
            <span>Home</span>
          </Link>
        </li>

        <div>
          <li>
            <Link to="/myOrderBookingList" className="text-black">
              <span>My Order Booking List</span>
            </Link>
          </li>
          <li>
            <Link to="/review" className="text-black">
              <span>Review</span>
            </Link>
          </li>
          {/* ///// */}
          <li>
            <Link to="/admain" className="text-black">
              <span>admain</span>
            </Link>
          </li>
        </div>
      </ul>
      <div>
        <Link to="/login" className="text-black">
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default ClientSidebar;
