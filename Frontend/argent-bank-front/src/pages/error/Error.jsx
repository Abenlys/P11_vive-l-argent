import React from "react";
import erreur from "../../assets/img/404error.jpg";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Error() {
  return (
    <div className="classreact">
      <Navbar />
      <div className="ErrorWrapper">
        <img className="illustration" src={erreur} alt="404" />
        <h1 className="ErrorTitle">
          Jarnicoton !! <br />
          Oups! La page que vous demandez n'existe pas.
        </h1>
        <Link className="ErrorSubTitle" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </div>
  );
}
