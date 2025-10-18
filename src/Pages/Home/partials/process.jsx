import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function process() {
const { t } = useTranslation();
  return (
    <div>
      <section id="process" className="py-5 bg-white custom-spacing">
        <div class="h"></div>
        <div class="v"></div>
        <div className="container">
          <h3 className="text-center fw-bold mb-3">
            {t("collaborate_heading")}
          </h3>
          <p
            className="text-center text-muted mb-5 mx-auto jost fs-5"
            style={{ maxWidth: "800px" }}
          >
            {t("collaborate_des")}
          </p>
          <div className="row g-4 justify-content-center pt-5
          ">
            <div className="col-md-5 col-lg-3">
              <div className="card card-border-radius border-0 h-100">
                <div className="card-body">
                  <div className="crd-img-wrapper text-center">
                    <img
                      src="Images/whatwedo.svg"
                      className="w-100 h-100"
                      alt=""
                    />
                  </div>
                  <h4 className="fw-bold text-primary mb-3 pt-4 text-center jost">
                    {t("collaborate_we_do")}
                  </h4>
                  <ul className="list-unstyled p-2 jost">
                    <li className="mb-2"><i class="fa-solid fa-circle-check pe-2"></i> {t("collaborate_we_do_1")}</li>
                    <li className="mb-2">
                      <i class="fa-solid fa-circle-check pe-2"></i> {t("collaborate_we_do_2")}
                    </li>
                    <li className="mb-2">
                      <i class="fa-solid fa-circle-check pe-2"></i> {t("collaborate_we_do_3")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-3">
              <div className="card card-border-radius border-0 h-100 rounded">
                <div className="card-body">
                  <div className="crd-img-wrapper text-center">
                    <img
                      src="Images/whatyoudo.svg"
                      className="w-100 h-100"
                      alt=""
                    />
                  </div>
                  <h4 className="fw-bold mb-3 pt-4 text-center jost">{t("collaborate_you_do")}</h4>
                  <ul className="list-unstyled p-2 jost">
                    <li className="mb-2"><i class="fa-solid fa-circle-minus pe-2"></i> {t("collaborate_you_do_1")}</li>
                    <li className="mb-2"><i class="fa-solid fa-circle-minus pe-2"></i> {t("collaborate_you_do_2")}</li>
                    <li className="mb-2"><i class="fa-solid fa-circle-minus pe-2"></i> {t("collaborate_you_do_3")}</li>
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
