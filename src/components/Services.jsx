import React from "react";
import { getDarkBg, getJsonObject, getLightBg } from "../config/config";

const Services = ({ classicHeader, darkTheme, compNo }) => {
  // services details
  const services = getJsonObject("services");


  return (
    <section
      id="services"
      className={
        "section " + (darkTheme ? getDarkBg(compNo) : getLightBg(compNo))
      }
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What We Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
        <div className="container-fluid bg-primary py-3">
          <div className="text-center text-6 text-white fw-bolder text-uppercase">
            hipaa Certified
          </div>
          <div className="text-center text-white text-2">
            All Doctors and Volunteers are HIPAA Certifed. All patients' data is
            securly stored on our encrypted database. 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
