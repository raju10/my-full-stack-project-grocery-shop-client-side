import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Sidebar/Sidebar";
import SideNavbar from "../../SideNavbar/SideNavbar";
import AddAdmainProduct from "../AddAdmainProduct/AddAdmainProduct";

const Admain = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  const [loginUserEmails, setLoginUserEmails] = useState([]);
  console.log("loginUserEmails", loginUserEmails);
  //
  const [admainEmail, setAdmainEmail] = useState([]);
  console.log("admainEmail", admainEmail);
  //
  const [isAdmain, setIsAdmain] = useState(false);
  //////
  const onSubmit = (data) => console.log(data);
  useEffect(() => {
    fetch("https://morning-sea-22549.herokuapp.com/ourProduct")
      .then((res) => res.json())
      .then((data) => {
        setLoginUserEmails(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://morning-sea-22549.herokuapp.com/ourAdmain")
      .then((res) => res.json())
      .then((data) => {
        setAdmainEmail(data);
      });
  }, []);
  /////////////
  useEffect(() => {
    fetch("https://morning-sea-22549.herokuapp.com/isAdmain", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loginUser.loginUserEmail }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmain(data));
  }, []);
  ////////////
  return (
    <div>
      {isAdmain ? (
        <div style={{ background: "#f4fdfb" }}>
          {/* <Sidebar></Sidebar> */}
          <SideNavbar></SideNavbar>
          <div className="row ">
            <div className="d-flex justify-content-center">
              <div className="col-md-4 " style={{ paddingLeft: "70px" }}>
                <AddAdmainProduct onSubmit={onSubmit}></AddAdmainProduct>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-center">
            I know you want to log in to my admin pages but sorry you can't log
            in. <br />
            If you want to log in to my admin page please send me a short mail
            with your email id
          </h3>
        </div>
      )}
    </div>
  );
};

export default Admain;
