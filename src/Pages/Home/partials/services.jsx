import React from "react";
import { useTranslation } from "react-i18next";

function services() {
  const { t } = useTranslation();
  return (
    <section id="services" className="py-5 bg-white custom-spacing">
      <div className="container">
        <h3 className="text-center fw-bold mb-3">{t("services")}</h3>
        <p
          className="text-center text-muted mb-5 mx-auto jost fs-5"
          style={{ maxWidth: "800px" }}
        >
          We provide a comprehensive range of documentation and design services
          to ensure your project meets all regulatory requirements and is ready
          for submission.
        </p>
        <div className="row g-4 justify-content-center pt-5">
          <div className="col-md-4 col-lg-3">
            <div className="card h-100 rounded-4 border-0 text-center">
              <div className="card-body px-4 pb-4">
                <div className="card-img pb-5">
                    <img src="Images/blueprint.gif" className="bg-white rounded-circle p-2 border crd-img-div" width={100} alt="" />
                </div>
                <h5 className="card-title fw-semibold fs-6">
                  Architectural & Technical Drawings
                </h5>
                {/* <div className="custom_uderline border-bottom border-2  border  w-50 my-3"></div> */}
                <p className="card-text text-muted jost">
                  We create precise and compliant architectural drawings and MEP
                  technical drawings. Your plans will be ready to meet authority
                  standards.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="card h-100 rounded-4 border-0 text-center">
              <div className="card-body px-4 pb-4">
                <div className="card-img pb-5">
                    <img src="Images/letter.gif" className="bg-white rounded-circle p-2 border" width={100} alt="" />
                </div>
                <h5 className="card-title fw-semibold fs-6">
                  Official Letters & Forms
                </h5>
                 {/* <div className="custom_uderline border-bottom border-2  border  w-50 my-3"></div> */}
                <p className="card-text text-muted jost">
                  We prepare all necessary application letters and forms for
                  submission to authorities like CMC, UDA, CMA, and COC
                  clearances.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="card h-100 rounded-4 border-0 text-center">
              <div className="card-body px-4 pb-4">
                <div className="card-img pb-5">
                    <img src="Images/folder.gif" className="bg-white rounded-circle p-2 border" width={100} alt="" />
                </div>
                <h5 className="card-title fw-semibold fs-6">
                  Complete Documentation Packages
                </h5>
                 {/* <div className="custom_uderline border-bottom border-2  border  w-50 my-3"></div> */}
                <p className="card-text text-muted jost">
                  Our packages include all drawings, letters, and forms, giving
                  you a ready-to-submit kit. We also provide MEP drawings
                  certified by chartered engineers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default services;
