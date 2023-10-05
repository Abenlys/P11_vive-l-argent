import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  setEmail,
  setFirstName,
  setId,
  setPassword,
  setUserName,
  setlastName,
} from "../../features/userProfileSlice";
import { loginUser, userProfile } from "../../utils/services/userService";

export default function SigninContent() {
  const location = useLocation();
  const email = useSelector((state) => state.userProfile.email);
  const password = useSelector((state) => state.userProfile.password);
  const userName = useSelector((state) => state.useProfile?.userName);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    dispatch(setEmail(newEmail));
  };
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    dispatch(setPassword(newPassword));
  };
  const updateProfileInStore = (profileData) => {
    dispatch(setFirstName(profileData.firstName));
    dispatch(setId(profileData.id));
    dispatch(setlastName(profileData.lastName));
    dispatch(setUserName(profileData.userName));
  };

  const handleSignin = async () => {
    try {
      const token = await loginUser(email, password);
      await userProfile(token, updateProfileInStore);
    } catch (error) {
      setError("une erreur s'est produite.");
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <div className="sign-in-button">
          <Link
            onClick={handleSignin}
            to={`/user/${userName}`}
            className={
              location.pathname === `/user/${userName}` ? "active" : ""
            }
          >
            <p>Sign In</p>
          </Link>
          {error && <p className="error-message">{error}</p>}
        </div>
      </form>
    </section>
  );
}
