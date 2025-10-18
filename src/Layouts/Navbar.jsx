import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

import Select from "react-select";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };
  const options = [
    {
      value: "en",
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="Images/web.png"
            alt="English"
            style={{ width: 20, height: 14, marginRight: 8 }}
          />
          English
        </div>
      ),
    },
    {
      value: "si",
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="Images/sri-lanka.png"
            alt="සිංහල"
            style={{ width: 20, height: 14, marginRight: 8 }}
          />
          සිංහල
        </div>
      ),
    },
  ];

  return (
    <div
      className="d-flex justify-content-center w-100 outer-nav"
      style={{ backgroundColor: "transparent" }}
    >
      <header className="shadow nav-bar-custom w-75 bg-white px-3 rounded-4 mt-3 custom-animated-border">
        <nav
          className="navbar navbar-expand-lg navbar-light container py-3"
          id="navbar-example2"
        >
          <a className="navbar-brand fw-bold fs-4 text-dark" href="#">
            <img
              src="Images/logo-black.png"
              width={130}
              alt="logo"
              className=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded= "false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
          id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto align-items-center nav nav-pills">
              <li className="nav-item me-3">
                <a href="#scrollservices" className="nav-link fw-semibold">
                  {" "}
                  Our Services
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="#scrollprocess" className="nav-link fw-semibold">
                  {" "}
                  Our Process
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="#scrollauthorities" className="nav-link fw-semibold">
                  {" "}
                  Advantages
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="" className="nav-link fw-semibold">
                  {" "}
                  About Us
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="#scrollcontact" className="nav-link fw-semibold">
                  {" "}
                  Contact Us{" "}
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item me-3">
                <Select
                  options={options}
                  onChange={(selectedOption) =>
                    changeLang(selectedOption.value)
                  }
                  defaultValue={options.find(
                    (opt) => opt.value === i18n.language
                  )}
                  isSearchable={false}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      border: "none",
                      boxShadow: "none",
                    }),
                  }}
                />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
