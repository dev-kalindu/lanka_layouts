import React from "react";
import { useTranslation } from "react-i18next";

function featuredsection() {
  const { t } = useTranslation();

  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active position-relative d-flex justify-content-start align-items-center">
          <img
            src="Images/hero-img-blue.jpg"
            class="d-block w-100 h-100 object-fit-cover"
            alt="construction-site"
          />
          <div class="position-absolute caption ps-lg-5 ms-lg-5">
            <div className="container ps-lg-5 ms-lg-5">
                {/* <div className="row justify-content-start">
                    <div className="col-md-4">
                        <img src="/Images/logo-white.png" alt="logo" className="mb-3 h-100 w-100" />
                    </div>
                </div> */}
                  <p
                className="mt-4 lead text-white"
                style={{ maxWidth: "700px" }}
              >
                {t("sideText")}
              </p>
              <h1 className="display-1 fw-bold text-white">{t("brand")}</h1>
              <h2 className="h4 text-white mt-3 story-script">{t("heroTitle")}</h2>
              <p
                className="mt-4 lead text-white"
                style={{ maxWidth: "700px" }}
              >
                {t("heroDesc")}
              </p>
              <a href="#services" className="btn btn-primary custom-btn mt-4 px-5 py-2">
                {t("services")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default featuredsection;
