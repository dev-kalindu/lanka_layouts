import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useTranslation } from "react-i18next";
import Featuredsection from "./partials/featuredsection";
import Services from "./partials/services";



function index() {
  const { t } = useTranslation();
  
  return (
    <>
      <div>
        {/* Hero Section */}

        <Featuredsection />

        {/* Services Section */}

        <Services />

        {/* Process Section */}
        <section id="process" className="py-5 bg-light">
          <div className="container">
            <h3 className="text-center fw-bold mb-3">
              Our Collaborative Process
            </h3>
            <p
              className="text-center text-muted mb-5 mx-auto"
              style={{ maxWidth: "800px" }}
            >
              We handle the technical preparation, so you can focus on managing
              your project and communicating with authorities.
            </p>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body">
                    <h4 className="fw-bold text-primary mb-3">What We Do</h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">✔ Prepare technical drawings</li>
                      <li className="mb-2">
                        ✔ Craft letters and forms for authorities
                      </li>
                      <li className="mb-2">
                        ✔ Provide complete documentation package
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body">
                    <h4 className="fw-bold mb-3">What You Do</h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">- Handle your own submissions</li>
                      <li className="mb-2">- Manage project timelines</li>
                      <li className="mb-2">- Deal directly with authorities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Authorities Section */}
        <section className="py-5 bg-white">
          <div className="container">
            <h3 className="text-center fw-bold mb-3">
              Navigating Sri Lankan Authorities
            </h3>
            <p
              className="text-center text-muted mb-5 mx-auto"
              style={{ maxWidth: "800px" }}
            >
              We prepare documentation for the following authorities, ensuring
              compliance with their requirements.
            </p>
            <div className="row g-4">
              <div className="col-md-3">
                <div className="bg-light p-4 rounded h-100">
                  <h5 className="fw-bold text-primary">CMC</h5>
                  <p className="small text-muted">
                    Colombo Municipal Council clearances for new construction
                    projects.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bg-light p-4 rounded h-100">
                  <h5 className="fw-bold text-primary">UDA</h5>
                  <p className="small text-muted">
                    Urban Development Authority approvals for development
                    permits.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bg-light p-4 rounded h-100">
                  <h5 className="fw-bold text-primary">CMA</h5>
                  <p className="small text-muted">
                    Condominium Management Authority approvals and compliance
                    checks.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bg-light p-4 rounded h-100">
                  <h5 className="fw-bold text-primary">COC</h5>
                  <p className="small text-muted">
                    Certificate of Conformity verifying building compliance with
                    regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
