import { FcGoogle, AiFillGoogleCircle } from "react-icons/fa";
import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import "./Login.css";
import google from "../../images/images.png";
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);

  console.log(loginUser);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const handelGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;

        const signInUser = {
          loginUserEmail: user.email,
          loginUserName: user.displayName,
          loginUserPhoto: user.photoURL,
        };
        setLoginUser(signInUser);
        history.replace(from);
        /////////////
        // sessionStorage.setItem("token", signInUser);
        ////////////
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        var email = error.email;

        var credential = error.credential;
        console.log(errorCode, errorMessage);
      });
    // const signinUserToken = () => {
    //   firebase
    //     .auth()
    //     .currentUser.getIdToken(/* forceRefresh */ true)
    //     .then(function (idToken) {
    //       sessionStorage.setItem("token", idToken);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    //   //
    // };
    //
  };
  return (
    <div className="d-flex justify-content-center ">
      <div className="login-container">
        <div className="buttonss">
          <p style={{ fontFamily: "monospace" }}>Please Sign in</p>
          <button onClick={handelGoogleSignIn}>
            Continue with{" "}
            <img
              src={google}
              alt=""
              style={{ width: "30px", paddingLeft: "10px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
