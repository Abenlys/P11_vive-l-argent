import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../pages/signin/Signin";
import User from "../pages/user/User";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";


export default function Router() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    
  );
}