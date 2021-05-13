import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faUserShield,
  faFolderOpen,
  faClipboardList,
  faCommentDots,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
// import { NavItem } from 'react-bootstrap';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link } from "react-router-dom";
const ClientSideNavbar = () => {
  return (
    <div>
      <SideNav
        style={{ backgroundColor: "#ca9e54" }}
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              {/* <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} /> */}
              <Link to="/home">
                {" "}
                <FontAwesomeIcon icon={faHome} style={{ fontSize: "1.75em" }} />
              </Link>
            </NavIcon>
            <NavText>
              {" "}
              <Link to="/home">Home</Link>
            </NavText>
          </NavItem>
          {/*  */}

          <NavItem eventKey="order">
            <NavIcon>
              <Link to="/order">
                {" "}
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  style={{ fontSize: "1.75em" }}
                />
              </Link>
            </NavIcon>{" "}
            <NavText>
              {" "}
              <Link to="/order">order</Link>
            </NavText>
          </NavItem>

          {/*  */}
          <NavItem eventKey="myOrderBookingList">
            <NavIcon>
              <Link to="/myOrderBookingList">
                {" "}
                <FontAwesomeIcon
                  icon={faClipboardList}
                  style={{ fontSize: "1.75em" }}
                />
              </Link>
            </NavIcon>
            <NavText>
              {" "}
              <Link to="/myOrderBookingList">My Order Booking List</Link>
            </NavText>
          </NavItem>
          {/*  */}
          <NavItem eventKey="review">
            <NavIcon>
              <Link to="/review">
                {" "}
                <FontAwesomeIcon
                  icon={faCommentDots}
                  style={{ fontSize: "1.75em" }}
                />
              </Link>
            </NavIcon>
            <NavText>
              {" "}
              <Link to="/review">Review</Link>
            </NavText>
          </NavItem>

          {/*  */}
          <NavItem eventKey="admain">
            <NavIcon>
              <Link to="/admain">
                {" "}
                <FontAwesomeIcon
                  icon={faUserShield}
                  style={{ fontSize: "1.75em" }}
                />
              </Link>
            </NavIcon>
            <NavText>
              {" "}
              <Link to="/admain">admain </Link>
            </NavText>
          </NavItem>
          {/*  */}
          {/* <NavItem eventKey="charts">
            <NavIcon>
              <Link to="/testimonial">
                {" "}
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  style={{ fontSize: "1.75em" }}
                />
              </Link>
            </NavIcon>
            <NavText>
              <Link to="/testimonial">Testimonial</Link>
            </NavText>
    
          </NavItem> */}
        </SideNav.Nav>
      </SideNav>
    </div>
  );
};

export default ClientSideNavbar;
