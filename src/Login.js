import React from "react";
import "./Login.css";
import { loginUrl } from "./Spotify";
function Login() {
  return (
    <div className="login">
      <img
        src="https://us.123rf.com/450wm/butenkow/butenkow1603/butenkow160300614/54523728-stock-vector-abstract-logo-for-music-and-sound-vector-pattern.jpg?ver=6"
        alt=""
      />
      <a href={loginUrl}> LOGIN WITH ASWIN MUSIC </a>
    </div>
  );
}

export default Login;
