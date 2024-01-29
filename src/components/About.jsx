import React, { useEffect } from "react";
import resumeFile from "../documents/resume.pdf";
import Testimonials from "./Testimonials";
import data from "../config/info.json";
import {getDarkBg,getLightBg,getStringyJson,getStringyNestedJson,} from "../config/config";
const AboutUs = ({ classicHeader, darkTheme, compNo }) => {
  let patients, awards , years ,projects,imgPath;
  const getData = () => {
    let output = getStringyJson("aboutus");
    return JSON.parse(output);
  };
  const data = getData();
  const setContent = data.map((info) => {
      imgPath = info["img"];
      return (
        <>
          <h2
            className={"text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")}
          >
            {info["heading"].split(info["heading-highlight"])[0]}
            {""}
            <span className="text-primary">{info["heading-highlight"]}</span>
            {info["heading"].split(info["heading-highlight"])[1]}
          </h2>
          <p className={darkTheme ? "text-white-50" : ""}>
            {info["paragraph-first"]}
          </p>
          <p className={darkTheme ? "text-white-50" : ""}>
            {info["paragraph-second"]}
          </p>
        </>
      );
  });

  const DisplayAchivements = () =>{
    data.map((result) =>{
      result["achivements"].map((value) =>{
        patients=value["patients"];
        awards = value["awards"];
        years = value ["years"]
        projects = value["projects"];
      });
    });
    console.log("test "+ years)
  }
  DisplayAchivements();
  return (
    <section
      id="about"
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
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About US
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Us More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          {/* {getStringyJson("heading").split(getStringyJson("heading-highlight"))[0]} <span className="text-primary">{getStringyJson("heading-higlight")}</span>{getStringyJson("heading").split(getStringyJson("heading-highlight"))[1]} */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            {/* <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
                          >
              I'm <span className="text-primary">Simone Olivia,</span> a Web
              Developer
              </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              Delivering work within time and budget which meets client’s
              requirements is our moto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.
            </p> */}
            {setContent}
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            {/*  <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Simone Olivia
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:chat@simone.com">chat@simone.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>28
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Los Angeles,
                  California
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div> */}
            <img
              className="img-fluid d-block"
              
              src = {imgPath}
              alt="text"
            />
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  {DisplayAchivements}
                  <span>{years}</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Years Experiance
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>{patients}</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Happy Patients
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>{projects}</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Projects Done
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>{awards}</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  {"Get Awards"}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* projects rewards counting end */}
      </div>
      {/* TODO: Remove this tag later */}
      {/* <Testimonials classicHeader ={classicHeader} darkTheme ={darkTheme}></Testimonials> */}
    </section>
  );
};

export default AboutUs;
