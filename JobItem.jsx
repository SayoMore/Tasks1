import React from "react";
import "../styles/JobItem.css";

const JobItem = ({ job, buttonHandler }) => {
  const title = job.jobTitle;
  const skills = job.skills;
  const company = job.company.companyName;
  const companyImage = job.companyImage;

  const skillset = skills.map((item) => (
    <button
      onClick={() => {
        buttonHandler(item);
        filterValue(item);
      }}
      value={item}
      key={item}
      className="skillbtn"
    >
      {item}
    </button>
  ));

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
