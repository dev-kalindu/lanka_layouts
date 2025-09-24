import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { FaPhoneAlt } from "react-icons/fa";

function index() {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");

    window.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;
      cursorDot.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 1000, fill: "forwards" }
      );
    });
  });
  return (
    <div>
      <div className="cursor-dot d-none d-lg-block" data-cursor-dot></div>
      <a
        href="tel:+94771234567"
        className="call-btn d-flex align-items-center justify-content-center"
      >
        <FaPhoneAlt size={22} />
      </a>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default index;
