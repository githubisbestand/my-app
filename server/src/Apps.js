import React from "react";
import Home from "./Figma/Home";
import "./Figma/style.css";
import "./Figma/contact.css";
//import About from "./Figma/About";
//import "./Figma/about.css";
import Conatact from "./Figma/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./Middle/Home";
//import "./Middle/Home.css";

function Apps()
{
    return(
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Contact" element={<Conatact />}></Route>
            </Routes>
          </BrowserRouter>
        </>
    )
}

export default Apps;

/*
 <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Contact" element={<Conatact />}></Route>
          </Routes>
  </BrowserRouter>
*/