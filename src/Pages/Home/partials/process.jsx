import React from "react";

function process() {
  return (
    <div>
      <section id="process" className="py-5 bg-light service-section linear-background">
        <div class="h"></div>
        <div class="v"></div>
        <div className="container">
          <h3 className="text-center fw-bold mb-3">
            Our Collaborative Process
          </h3>
          <p
            className="text-center text-muted mb-5 mx-auto jost fs-5"
            style={{ maxWidth: "800px" }}
          >
            We handle the technical preparation, so you can focus on managing
            your project and communicating with authorities.
          </p>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card card-border-radius shadow-sm border-0 h-100">
                <div className="card-body">
                  <div className="crd-img-wrapper text-center">
                    <img
                      src="Images/whatwedo.svg"
                      className="w-100 h-100"
                      alt=""
                    />
                  </div>
                  <h4 className="fw-bold text-primary mb-3 pt-4 text-center">
                    What We Do
                  </h4>
                  <ul className="list-unstyled text-center p-2">
                    <li className="mb-2">✔ Prepare technical drawings</li>
                    <li className="mb-2">
                      ✔ Craft letters and forms for authorities.
                    </li>
                    <li className="mb-2">
                      ✔ Provide complete documentation package
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-border-radius shadow-sm border-0 h-100 rounded">
                <div className="card-body">
                  <div className="crd-img-wrapper text-center">
                    <img
                      src="Images/whatyoudo.svg"
                      className="w-100 h-100"
                      alt=""
                    />
                  </div>
                  <h4 className="fw-bold mb-3 pt-4 text-center">What You Do</h4>
                  <ul className="list-unstyled text-center p-2">
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
    </div>
  );
}

export default process;
