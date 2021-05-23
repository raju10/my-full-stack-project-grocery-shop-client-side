import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faBook,
  faEnvelope,
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
const SideNavbar = () => {
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

          <NavItem eventKey="allOrderList">
            <NavIcon>
              <Link to="/allOrderList">
                {" "}
                <FontAwesomeIcon icon={faUser} style={{ fontSize: "1.75em" }} />
              </Link>
            </NavIcon>{" "}
            <NavText>
              {" "}
              <Link to="/allOrderList">All Order List</Link>
            </NavText>
          </NavItem>

          {/*  */}
          <NavItem eventKey="admain">
            <NavIcon>
              <Link to="/admain">
                {" "}
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ fontSize: "1.75em" }}
                />
              </Link>
            </NavIcon>
            <NavText>
              {" "}
              <Link to="/admain">Add Sarvices</Link>
            </NavText>
          </NavItem>
          {/*  */}
          <NavItem eventKey="makeAdmain">
            <NavIcon>
              <Link to="/makeAdmain">
                {" "}
                <FontAwesomeIcon icon={faBook} style={{ fontSize: "1.75em" }} />
              </Link>
            </NavIcon>
            <NavText>
              {" "}
              <Link to="/makeAdmain">Make Admain</Link>
            </NavText>
          </NavItem>

          {/*  */}
          <NavItem eventKey="manageSarvice">
            <NavIcon>
              <Link to="/manageSarvice">
                {" "}
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ fontSize: "1.75em" }}
                />
              </Link>
            </NavIcon>
            <NavText>
              {" "}
              <Link to="/manageAllSarvice">Manage Sarvice</Link>
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

export default SideNavbar;
