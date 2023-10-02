import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Account from "../../Components/Account/Account";
import Footer from '../../Components/Footer/Footer'

export default function User() {
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
