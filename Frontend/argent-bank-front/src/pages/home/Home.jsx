import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Banner />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
