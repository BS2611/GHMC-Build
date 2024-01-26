import React, { useState } from "react";
import { getJson, getStringyJson } from "../config/config";
import { end } from "@popperjs/core";


const getClinicTmings = () =>{
let data = getStringyJson("clinicDetails");
console.log("Clinc   " +data.toString());
return JSON.parse(data);
}

const Schedule = ({classicHeader, darkTheme}) => {
  let data = getClinicTmings();
  const getFormattedDate =(input) =>{
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const obj = new Date(input + " 00:00:00");
    console.log("Checking date object" + obj.getDate());

    const day = days[obj.getDay()];
    const month = months[obj.getMonth()];
    const date = obj.getDate();

    return day +" " + month+", "+ date;
  }
   const DisplayData = data.map((info,index) => {
     return (
       <tr key ={index+1}>
         <th scope="row">{index+1}</th>
         <td>{getFormattedDate(info.date)}</td>
         <td>{info.startTime +" - " +info.endTime}</td>
         <td>{info.description}</td>
       </tr>
     );
   });

  return (
    <section
      id="schedule"
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
            Schedule
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Upcoming Clinics
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        <div className="table-responsive">        
        <table className={"table table-bordered table-sm"+ " " + (darkTheme ? "table-dark-2" : "table-light")}>
          <thead className="table-primary ">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {DisplayData}
          </tbody>
        </table>
        </div>
      </div>
    </section>
  );
}
export default Schedule;