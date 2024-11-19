import React, { useEffect, useState } from "react";
import Header from "./Header";;
import mainLogo from "../assets/terra.png";
import { Outlet } from "react-router-dom";
import "./App.css";

export default function App() {

  return (
    <>
      <Header
        src={mainLogo}
        alt="Website logo"
        logo={<i className="fa-regular fa-moon"></i>}
      />
      <Outlet/>
    </>
  );
}
