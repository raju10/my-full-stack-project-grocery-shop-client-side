import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Admain from "./Components/Admain/Admain/Admain";
import MakeAdmain from "./Components/Admain/MakeAdmain/MakeAdmain/MakeAdmain";

export const MakeAddAdmainContext = createContext();
function App() {
  const [makeAdmainEmail, setMakeAdmainEmail] = useState({});
  return (
    <div>
      <MakeAddAdmainContext.Provider
        value={[makeAdmainEmail, setMakeAdmainEmail]}
      >
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/admain">
              <Admain></Admain>
            </Route>
            <Route path="/makeAdmain">
              <MakeAdmain></MakeAdmain>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </MakeAddAdmainContext.Provider>
    </div>
  );
}

export default App;
