import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  setFirstName,
  setId,
  setLogin,
  setToken,
  setUserName,
  setlastName,
} from "../../features/userProfileSlice";
import { loginUser, userProfile } from "../../utils/services/userService";

export default function SigninContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  // const [remenber, setRemenber] = useState(false)
  const dispatch = useDispatch();

  const handleInfoLogin = (event) => {
    setDataLogin({
      ...dataLogin,
      [event.target.id]: event.target.value,
    });
  };

  const handleRememberMechange = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      document.cookie = `rememberedEmail=${dataLogin.email}; Secure; SameSite=Strict`;
      document.cookie = `rememberedPassword=${dataLogin.password}; Secure; SameSite=Strict`;
    } else {
      document.cookie = "rememberedEmail=; Max-Age=0; Secure; SameSite=Strict";
      document.cookie =
        "rememberedPassword=; Max-Age=0; Secure; SameSite=Strict";
    }
  };

  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const rememberedEmail = cookies.find((cookie) =>
      cookie.startsWith("rememberedEmail=")
    );
    const rememberedPassword = cookies.find((cookie) =>
      cookie.startsWith("rememberedPassword=")
    );
    if (rememberedEmail && rememberedPassword) {
      setDataLogin({
        email: rememberedEmail.split("=")[1],
        password: rememberedPassword.split("=")[1],
      });
    }
  }, []);

  const updateProfileInStore = (profileData) => {
    dispatch(setFirstName(profileData.firstName));
    dispatch(setId(profileData.id));
    dispatch(setlastName(profileData.lastName));
    dispatch(setUserName(profileData.userName));
    dispatch(setLogin());
  };

  const handleSignin = async () => {
    try {
      const token = await loginUser(dataLogin.email, dataLogin.password);
      dispatch(setToken(token));
      window.localStorage.setItem("token", token)
      const userInfo = await userProfile(token);
      updateProfileInStore(userInfo);
      navigate("/user/:id");
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
            value={dataLogin.email}
            onChange={handleInfoLogin}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={dataLogin.password}
            onChange={handleInfoLogin}
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            onChange={handleRememberMechange}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <div className="sign-in-button">
          <Link
            onClick={handleSignin}
            className={location.pathname === "/user/:id" ? "active" : ""}
          >
            <p>Sign In</p>
          </Link>
        </div>
        {error && (
          <p className="error-message">
            La connexion a échouée <br />
            Vérifier votre mail et mot de passe
          </p>
        )}
      </form>
    </section>
  );
}
