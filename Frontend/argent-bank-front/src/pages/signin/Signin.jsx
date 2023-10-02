import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import SigninContent from '../../Components/SigninContent/SigninContent'
import Footer from '../../Components/Footer/Footer'

export default function Signin() {
  return (
    <div className="classreact">
      <Navbar />
      <main className="main bg-dark">
        <SigninContent />
      </main>
      <Footer />
    </div>
  )
}
