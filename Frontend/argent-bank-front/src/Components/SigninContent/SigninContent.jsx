import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SigninContent() {
  const location = useLocation();
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <div className="sign-in-button">
          <Link
            to="/user/:id"
            className={location.pathname === "/user/:id" ? "active" : ""}
          >
            <p>Sign In</p>
          </Link>
        </div>
      </form>
    </section>
  );
}
