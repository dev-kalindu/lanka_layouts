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
      {/* <div className="cursor-dot d-none d-lg-block" data-cursor-dot></div> */}
      <a href="tel:0712345678" mypage="" class="call-now" rel="nofollow">
        <div class="mypage-alo-phone">
          <div class="animated infinite pulse mypage-alo-ph-circle-fill"></div>
          <div class="animated infinite tada mypage-alo-ph-img-circle"></div>
        </div>
      </a>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default index;
