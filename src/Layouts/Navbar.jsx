import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import "../i18n";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <header className="bg-white shadow-sm nav-bar-custom">
        <nav className="navbar navbar-expand-md navbar-light bg-white container py-3">
          <a className="navbar-brand fw-bold fs-4 text-dark" href="#">
            <img src="Images/logo-black.png" width={130} alt="logo" className="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item me-3">
                <select
                  className="form-select form-select-sm"
                  style={{ width: "auto" }}
                  onChange={(e) => changeLang(e.target.value)}
                  defaultValue={i18n.language}
                >
                  <option value="en">English</option>
                  <option value="si">සිංහල</option>
                </select>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
