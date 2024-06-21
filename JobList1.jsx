import React, { useState } from "react";
import JobItem from "./JobItem";

function JobList1(jobs) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const buttonHandler = (e) => {
    // const value1 = e.target.value;
    // console.log(value1);
    // setVal(value1);
    // <Filter value={val} skillset={skills} />;

    // console.log(e);

    if (selectedFilters?.includes(e)) {
    } else {
      setSelectedFilters((prev) => {
        return [...prev, e];
      });
    }
  };

  console.log({ selectedFilters });
  const data2 = jobs.job;
  const list2 = data2.map((item, index) => {
    // console.log(item);
    return <JobItem key={index} job={item} buttonHandler={buttonHandler} />;
  });

  return <div className="job-list">{list2}</div>;
}

export default JobList1;
