import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useTranslation } from "react-i18next";
import Featuredsection from "./partials/featuredsection";
import Services from "./partials/services";
import Process from "./partials/process";
import Authorities from "./partials/authorities";
import Contact from "./partials/contactus";


function index() {
  const { t } = useTranslation();

  return (
    <>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example rounded-2"
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
        <div id="scrollcontact">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default index;
