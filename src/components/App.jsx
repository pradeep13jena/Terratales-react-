import React from "react";
import Header from "./Header";
import Search from "./Search";
import CountryList from "./CountryList";
import mainLogo from "../assets/Terra.png";
import { useState } from "react";
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
