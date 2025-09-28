import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useTranslation } from "react-i18next";
import Featuredsection from "./partials/featuredsection";
import Services from "./partials/services";
import Process from "./partials/process";
import Authorities from "./partials/authorities";

function index() {
  const { t } = useTranslation();

  return (
    <>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-body-tertiary rounded-2"
        tabIndex="0"
      >
        {/* Hero Section */}

        <div id="scrollhome">
          <Featuredsection />
        </div>

        {/* Services Section */}

        <div id="scrollservices">
          <Services />
        </div>

        {/* Process Section */}

        <div id="scrollprocess">
          <Process />
        </div>

        {/* Authorities Section */}

        <div id="scrollauthorities">
          <Authorities />
        </div>

        {/* CTA Section */}
        <section
          id="contact"
          className="py-5 bg-primary text-white text-center"
        >
          <div className="container">
            <h3 className="fw-bold mb-3">Ready to Get Started?</h3>
            <p className="mb-4">
              Let us handle your technical documentation so you can focus on the
              bigger picture.
            </p>
            <a
              href="mailto:info@lankalayouts.lk"
              className="btn btn-light btn-lg rounded-pill"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default index;
