import React from "react";
import { useTranslation } from "react-i18next";

function authorities() {
  const { t } = useTranslation();

  return (
    <div className="pb-5">
      <section className="py-5 bg-white custom-spacing ">
        <div className="container">
          <h3 className="text-center fw-bold mb-3">
            {t("authorities_heading")}
          </h3>
          <p
            className="text-center text-muted mb-5 mx-auto jost fs-5"
            style={{ maxWidth: "800px" }}
          >
          {t("authorities_des")}
          </p>
          <div className="authorities-row row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="bg-white border h-100 authority-card">
                <div className="img-wrapper">
                  <img src="Images/cmc.jpg" className="w-100 h-100" alt="" />
                </div>
                <div className="p-4">
                  <h5 className="fw-bold text-black">{t("authorities_1")}</h5>
                  <p className=" text-muted jost">
                   {t("authorities_1_des")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="bg-white border h-100 authority-card">
                <div className="img-wrapper">
                  <img src="Images/uda.jpg" className="w-100 h-100" alt="" />
                </div>
                <div className="p-4">
                  <h5 className="fw-bold text-black">{t("authorities_2")}</h5>
                  <p className="jost text-muted">
                    {t("authorities_2_des")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="bg-white border h-100 authority-card">
                <div className="img-wrapper">
                  <img src="Images/cma.png" className="w-100 h-100" alt="" />
                </div>
                <div className="p-4">
                  <h5 className="fw-bold text-black">{t("authorities_3")}</h5>
                  <p className="jost text-muted">
                    {t("authorities_3_des")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="bg-white border h-100 authority-card">
                <div className="img-wrapper">
                  <img src="Images/coc.jpg" className="w-100 h-100" alt="" />
                </div>
                <div className="p-4">
                  <h5 className="fw-bold text-black">{t("authorities_4")}</h5>
                  <p className="jost text-muted">
                    {t("authorities_4_des")}
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
