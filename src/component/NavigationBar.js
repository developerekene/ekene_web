import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

export default function NavigationBar() {
  return (
    <>
      <nav className="nav">
        <a href="/" className="title-name">Ekenedilichukwu Okoli</a>
        <ul>
          <li>
            <a href="/about">About me</a>
          </li>
          <li>
            <a href="/exprience">Experience</a>
          </li>
          <li>
            <a href="/training">Training</a>
          </li>
          <li>
            <a href="/more">More</a>
          </li>
        </ul>
      </nav>
      {/* <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div> */}
    </>
  );
}
