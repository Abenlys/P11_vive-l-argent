import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Account from "../../Components/Account/Account";
import Footer from "../../Components/Footer/Footer";
import { userProfile } from "../../utils/services/userService";
import { useDispatch } from "react-redux";
import {
  setFirstName,
  setId,
  setlastName,
  setUserName,
  setLogin,
} from "../../features/userProfileSlice";

export default function User() {
  // Uniquement pour gérer le reload de la page
  const recupToken = localStorage.getItem("token");
  const dispatch = useDispatch();
  const updateProfileInStore = async (profileData) => {
    dispatch(setFirstName(profileData.firstName));
    dispatch(setId(profileData.id));
    dispatch(setlastName(profileData.lastName));
    dispatch(setUserName(profileData.userName));
    dispatch(setLogin());
  };
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (recupToken !== null) {
        try {
          const userInfo = await userProfile(recupToken);
          updateProfileInStore(userInfo);
        } catch (error) {
          console.log("une erreur s'est produite");
        }
      }
    };
    fetchUserProfile();
  }, [recupToken]);
  return (
    <div className="classreact">
      <Navbar />
      <main className="main bg-dark">
        <Header />
        <h2 className="sr-only">Accounts</h2>
        <Account />
      </main>
      <Footer />
    </div>
  );
}
