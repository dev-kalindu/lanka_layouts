import React from "react";

function authorities() {
  return (
    <div>
      <section className="py-5 bg-white service-section">
        <div className="container">
          <h3 className="text-center fw-bold mb-3">
            Navigating Sri Lankan Authorities
          </h3>
          <p
            className="text-center text-muted mb-5 mx-auto jost fs-5"
            style={{ maxWidth: "800px" }}
          >
            We prepare documentation for the following authorities, ensuring
            compliance with their requirements.
          </p>
          <div className="authorities-row row g-4">
            <div className="col-md-3">
              <div className="bg-white border h-100 authority-card">
                <div className="img-wrapper">
                  <img src="Images/cmc.jpg" className="w-100 h-100" alt="" />
                </div>
                <div className="p-4">
                  <h5 className="fw-bold text-black">CMC</h5>
                  <p className="small text-muted">
                    Colombo Municipal Council clearances for new construction
                    projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="bg-white border h-100 authority-card">
                <div className="img-wrapper">
                  <img src="Images/uda.jpg" className="w-100 h-100" alt="" />
                </div>
                <div className="p-4">
                  <h5 className="fw-bold text-black">UDA</h5>
                  <p className="small text-muted">
                    Urban Development Authority approvals for development
                    permits.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="bg-white border h-100 authority-card">
                <div className="img-wrapper">
                  <img src="Images/cma.png" className="w-100 h-100" alt="" />
                </div>
                <div className="p-4">
                  <h5 className="fw-bold text-black">CMA</h5>
                  <p className="small text-muted">
                    Condominium Management Authority approvals and compliance
                    checks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="bg-white border h-100 authority-card">
                <div className="img-wrapper">
                  <img src="Images/coc.jpg" className="w-100 h-100" alt="" />
                </div>
                <div className="p-4">
                  <h5 className="fw-bold text-black">COC</h5>
                  <p className="small text-muted">
                    Certificate of Conformity verifying building compliance with
                    regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default authorities;
