import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";

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
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        var email = error.email;

        var credential = error.credential;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={handelGoogleSignIn} className="btn btn-success">
        Sign in with google
      </button>
    </div>
  );
};

export default Login;
