import React from "react";
import "../styles/JobItem.css";
// import Filter from "./Filter";
import { useState } from "react";

const JobItem = ({ job, buttonHandler }) => {
  const id = job._id;
  const title = job.jobTitle;
  const skills = job.skills;
  const company = job.company.companyName;
  const location = job.location;
  const formattedAddress = job.formattedAddress;
  const companyImage = job.companyImage;

  const skillset = skills.map((item) => {
    return (
      <>
        <button
          onClick={() => {
            buttonHandler(item);
          }}
          value={item}
          key={item}
        >
          {item}
        </button>
      </>
    );
  });
  return (
    <div className="job-item">
      <div className="flex1">
        <div className="flex1">
          <img src={companyImage} className="image1" alt="No_image_found" />
          <div>
            <h1>{company}</h1>
            <h4>{title}</h4>
          </div>
        </div>
        <p className="para">{skillset}</p>
      </div>
    </div>
  );
};

export default JobItem;
