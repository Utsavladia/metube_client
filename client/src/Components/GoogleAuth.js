import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { isExpired, decodeToken } from "react-jwt";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { profilepic } from "../actions/profilePic";

const GoogleOAuth = ({ adduser }) => {
  const dispatch = useDispatch();
  const onSuccess = (response) => {
    const decodedToken = decodeToken(response.credential);
    console.log("Google OAuth success:", response);
    adduser(decodedToken.given_name);
    const Email = decodedToken.email;
    dispatch(login({ email: Email }));
    console.log("user image is...... ", decodedToken.picture);
    dispatch(
      profilepic({ image: decodedToken.picture, name: decodedToken.given_name })
    );
    console.log("username is ", Email);
    const userData = {
      name: decodedToken.given_name,
      email: decodedToken.email,
    };
    console.log("usedata we got as ", userData);
    // dispatch(setCurrentUser(userData));
  };

  const onFailure = (error) => {
    console.error("Google OAuth failure:", error);
    // Handle authentication failure
  };

  return (
    <GoogleLogin
      clientId="521209109581-sgv944c36o7uo5vt1k1b70ge7a9s5te1.apps.googleusercontent.com"
      onSuccess={onSuccess}
      onFailure={onFailure}
      buttonText="Sign in with Google"
    />
  );
};

export default GoogleOAuth;
