import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Admain from "./Components/Admain/Admain/Admain";
import MakeAdmain from "./Components/Admain/MakeAdmain/MakeAdmain/MakeAdmain";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Order from "./Components/Order/Order/Order";
import MyOrderBookingList from "./Components/MyOrderBookingList/MyOrderBookingList/MyOrderBookingList";
import Review from "./Components/Review/Review/Review";
import AllOrderList from "./Components/Order/AllOrderList/AllOrderList/AllOrderList";
//////////////
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

import ManageSarvices from "./Components/ManageSarvices/ManageSarvices/ManageSarvices";

//////////////

export const UserContext = createContext();
export const userOrderContext = createContext();

function App() {
  const [loginUser, setLoginUser] = useState({});
  const [selcOrder, setSelcOrder] = useState({
    orderName: "",
    orderImg: "",
    orderPrice: "",
  });
  return (
    <div>
      <userOrderContext.Provider value={[selcOrder, setSelcOrder]}>
        <UserContext.Provider value={[loginUser, setLoginUser]}>
          <Router>
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/admain">
                <Admain></Admain>
              </PrivateRoute>
              <Route path="/makeAdmain">
                <MakeAdmain></MakeAdmain>
              </Route>
              <Route path="/allOrderList">
                <AllOrderList></AllOrderList>
              </Route>
              <PrivateRoute path="/order">
                <Order></Order>
              </PrivateRoute>
              <Route path="/myOrderBookingList">
                <MyOrderBookingList></MyOrderBookingList>
              </Route>
              <Route path="/review">
                <Review></Review>
              </Route>
              <Route path="/manageSarvice">
                <ManageSarvices></ManageSarvices>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>

              <Route exact path="/">
                <Home></Home>
              </Route>
              {/*  */}

              <Route
                render={({ location, history }) => (
                  <React.Fragment>
                    <SideNav
                      onSelect={(selected) => {
                        const to = "/" + selected;
                        if (location.pathname !== to) {
                          history.push(to);
                        }
                      }}
                    >
                      <SideNav.Toggle />
                      <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                          <NavIcon>
                            <i
                              className="fa fa-fw fa-home"
                              style={{ fontSize: "1.75em" }}
                            />
                          </NavIcon>
                          <NavText>Home</NavText>
                        </NavItem>
                        {/* <NavItem eventKey="devices">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-device"
                          style={{ fontSize: "1.75em" }}
                        />
                      </NavIcon>
                      <NavText>Devices</NavText>
                    </NavItem> */}
                      </SideNav.Nav>
                    </SideNav>
                    <main>
                      {/* <Route path="/" exact component={props => <RootComponent />} /> */}
                      <Route path="/home" component={(props) => <Home />} />
                      {/* <Route path="/devices" component={props => <Devices />} /> */}
                    </main>
                  </React.Fragment>
                )}
              />

              {/*  */}
            </Switch>
          </Router>
        </UserContext.Provider>
      </userOrderContext.Provider>
    </div>
  );
}

export default App;
