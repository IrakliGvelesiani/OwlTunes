import React from "react";
import "./Login.css";
import Logo from "./assets/owltunes.png";
import { signinUrl } from "./spotify";

const Login = () => {
  return (
    <div className="login">
      {/* Logo */}
      <img src={Logo} alt="OwlTunes Logo" />
      {/* Login With Spotify Button */}
      <a href={signinUrl}>SignIn With Spotify</a>
    </div>
  );
};

export default Login;
