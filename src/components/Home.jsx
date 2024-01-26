import React from "react";
import Typewriter from "typewriter-effect";
import { getJson } from "../config/config";
//import videobg from "../videos/home.mp4";


const getClinicDates = () =>{
  //TODO: Write code for extracting dates from a json file
  let dataH = ["Jan 27","Feb 3","March 5"];
  //* write the data extraction here
  const dates = getJson("clinicDates");
 
  let datastr = dates.join(", ")
  return datastr;
}

const Home = ({ classicHeader, darkTheme, handleNavClick }) => {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark" />

        {/* ---------------image background------------------ */}
        <div
          className="hero-bg parallax"
          //TODO: Replcace this with orignal bg
          // style={{ backgroundImage: 'url("images/intro-bg.jpg")' }}
          style={{ backgroundImage: 'url("images/BannerPicture.jpg")' }}
        ></div>

        {/* -------------------video background---------------------- */}

        {/* <div className="player hero-bg parallax">
          <video
            src={videobg}
            autoPlay
            muted
            loop
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          ></video>
        </div> */}

        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-7 fw-500 text-white mb-2 mb-md-3">Welcome</p>
                <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                  <Typewriter
                    options={{
                      strings: [
                        "GHMC Clinic",
                        "No Insurance Required ",
                        //"Quality Healthcare, Zero Barriers",
                        "Open For All !",
                        "ਕੋਈ ਬੀਮੇ ਦੀ ਲੋੜ ਨਹੀਂ"
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                <p className="text-5 text-light mb-4">
                  based in Fremont, California.
                </p>
                <p id="dates" className="text-5 text-light mb-4"> <u>Upcoming Clinics:</u>{" "+getClinicDates()} </p>
                <a
                  href="#contact"
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            <span className="animated">
              <i className="fa fa-chevron-down" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
