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
        {t("service_des")}
        </p>
        <div className="row g-4 justify-content-center pt-5">
          <div className="col-md-4 col-lg-3">
            <div className="card h-100 rounded-4 border-0 text-center">
              <div className="card-body px-4 pb-4">
                <div className="card-img pb-5">
                    <img src="Images/blueprint.gif" className="bg-white rounded-circle p-2  crd-img-div" width={100} alt="" />
                </div>
                <h5 className="card-title fw-semibold fs-6">
                 {t("service_1")}
                </h5>
                {/* <div className="custom_uderline border-bottom border-2  border  w-50 my-3"></div> */}
                <p className="card-text text-muted jost">
                 {t("service_1_des")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="card h-100 rounded-4 border-0 text-center">
              <div className="card-body px-4 pb-4">
                <div className="card-img pb-5">
                    <img src="Images/letter.gif" className="bg-white rounded-circle p-2 " width={100} alt="" />
                </div>
                <h5 className="card-title fw-semibold fs-6">
                  {t("service_2")}
                </h5>
                 {/* <div className="custom_uderline border-bottom border-2  border  w-50 my-3"></div> */}
                <p className="card-text text-muted jost">
                 {t("service_2_des")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="card h-100 rounded-4 border-0 text-center">
              <div className="card-body px-4 pb-4">
                <div className="card-img pb-5">
                    <img src="Images/folder.gif" className="bg-white rounded-circle p-2 " width={100} alt="" />
                </div>
                <h5 className="card-title fw-semibold fs-6">
                 {t("service_3")}
                </h5>
                 {/* <div className="custom_uderline border-bottom border-2  border  w-50 my-3"></div> */}
                <p className="card-text text-muted jost">
                  {t("service_3_des")}
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
