import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

function Footer() {
  const { t } = useTranslation();
  return (
    <div>
      <footer>
        <section className="footer-div">
          <div className="container">
            <div className="row py-5 align-items-center">
              <div className="col-md-6 col-lg-3">
                <div className="footer-logo pb-4">
                  <img
                    src="Images/logo-white.png"
                    className="w-100 h-100"
                    alt=""
                  />
                </div>
                <p className="text-white jost">
                 {t("heroDesc")}
                </p>
              </div>
              <div className="col-md-7">
                <div className="nav-link-footer">
                  <p>
                    <Link
                      to="scrollservices"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="text-white jost fs-5 text-decoration-none"
                    >
                      Our Services
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="scrollprocess"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="text-white jost fs-5 text-decoration-none"
                    >
                      Our Process
                    </Link>
                  </p>
                  <p>
                   <Link
                      to="scrollauthorities"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="text-white jost fs-5 text-decoration-none"
                    >
                      Advantages
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="scrollservices"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="text-white jost fs-5 text-decoration-none"
                    >
                      About Us
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="scrollservices"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="text-white jost fs-5 text-decoration-none"
                    >
                      Contact Us
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="text-white">
                  <p className="fw-bold fs-4 jost mb-2">Terms & Policies</p>
                  <p className="mb-1 jost footer-link">Privacy Policy</p>
                  <p className="jost footer-link">Terms of Service</p>
                </div>
                <div className="social-icons">
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
      <footer className="bg-black text-white text-center py-3">
        <p className="mb-0">&copy; <span className="story-script">2025 Lanka Layouts.</span> All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
