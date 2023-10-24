import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../features/userProfileSlice";

export default function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch()
  const loged = useSelector((state) => state.userProfile.loged);
  const userName = useSelector((state) => state.userProfile.user.userName);
  const handleLogOut = () => {
    dispatch(setLogout())
  }
  const isLoged = () => {
    if (loged !== false) {
      return (
        <>
        <Link className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        <p>{userName}</p>
        </Link>
        <Link to="/signin" className="main-nav-item" onClick={handleLogOut}>
          <i className="fa fa-sign-out"></i> <p>Sign Out</p>
        </Link>
        </>
      );
    } else {
      return (
        <Link to="/signin" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          <p>Sign In</p>
        </Link>
      );
    }
  };

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
      <div className="classreactrow">
        {isLoged()}
        </div>
    </nav>
  );
}
