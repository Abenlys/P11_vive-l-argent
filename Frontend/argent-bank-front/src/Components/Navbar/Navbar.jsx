import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.png";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="main-nav">
      <div className="main-nav-logo">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
      </div>
      <div className="main-nav-item">
        <Link to="/signin" className={location.pathname === "/signin" ? "active" : ""}>
          <i className="fa fa-user-circle"></i>
          <p>Sign In</p>
        </Link>
      </div>
    </nav>
  );
}
