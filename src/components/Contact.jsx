import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
import { getJson } from "../config/config";

import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "./Tooltip";

const formatPhoneNumber = (number) => {
  //Filter only numbers from the input
  let cleaned = ("" + number).replace(/\D/g, "");

  //Check if the input is of correct length
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }

  return null;
};

const formatAddress = (string) =>{
  const formatAddrs = string.replace(",",'\n');
  return formatAddrs;
}
const Contact = ({ classicHeader, darkTheme }) => {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingMail(true);
    emailjs
      .sendForm(
        "service_i86k3ms",
        "template_si6cin9",
        form.current,
        "c9HsDgGF0tvWyVnAL"
      )
      .then(
        (result) => {
          document.getElementById("contact-form").reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: darkTheme ? "dark" : "light",
          });
          console.log(result.text);
          setSendingMail(false);
        },
        (error) => {
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: darkTheme ? "dark" : "light",
          });
          console.log(error.text);
          setSendingMail(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
            Contact
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Get in Touch
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* contact details */}
          <div className="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-start">
            <h2
              className={
                "mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")
              }
            >
              Address
            </h2>
            <p
              className={
                "text-3 mb-4 formatted-address" +
                (darkTheme ? "text-light" : "")
              }
            >
              {formatAddress(getJson("address"))}
            </p>
            <p className={"text-3 mb-1 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-phone" />
              </span>
              <a href={"tel:+" + getJson("telNo")}>
                {formatPhoneNumber(getJson("mobNo"))}
              </a>
            </p>
            <p className={"text-3 mb-1 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-fax" />
              </span>
              <a href={"tel:+" + getJson("telNo")}>
                {formatPhoneNumber(getJson("telNo"))}
              </a>
            </p>
            <p className={"text-3 mb-4 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-envelope" />
              </span>
              <a href={"mailto:" + getJson("email")}> {getJson("email")} </a>
            </p>
            <h2
              className={
                "mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")
              }
            >
              Follow Me
            </h2>
            <ul
              className={
                "social-icons justify-content-center justify-content-md-start " +
                (darkTheme ? "social-icons-muted" : "")
              }
            >
              <li className="social-icons-dribbble">
                <Tooltip text="Dribbble" placement="top">
                  <a
                    href="http://www.dribbble.com/harnishdesign/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-dribbble" />
                  </a>
                </Tooltip>
              </li>
              <li className="social-icons-twitter">
                <Tooltip text="Twitter" placement="top">
                  <a
                    href="https://twitter.com/harnishdesign/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </Tooltip>
              </li>
              <li className="social-icons-facebook">
                <Tooltip text="Facebook" placement="top">
                  <a
                    href="http://www.facebook.com/harnishdesign/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </Tooltip>
              </li>
              <li className="social-icons-google">
                <Tooltip text="Google" placement="top">
                  <a
                    href="http://www.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-google" />
                  </a>
                </Tooltip>
              </li>
              <li className="social-icons-github">
                <Tooltip text="Github" placement="top">
                  <a
                    href="http://www.github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
          {/* contact form */}
          <div className="col-md-8 col-xl-9 order-0 order-md-1 maps-div">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.7884620352706!2d-122.00079672554237!3d37.58359862315181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbff733eaaaab%3A0x87ad9fe71a53fb00!2sGurdwara%20Sahib%20Fremont!5e0!3m2!1sen!2sus!4v1705114896914!5m2!1sen!2sus"
              width="600"
              className="mapsApi"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
