import React, { useState, useEffect } from "react";
import Search from "./Search";
import JobItem from "./JobItem";

function JobList1(jobs) {
  const data2 = jobs.job;
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(data2);

  const buttonHandler = (e) => {
    if (selectedFilters.includes(e)) {
    } else {
      setSelectedFilters((prev) => {
        return [...prev, e];
      });
    }
  };
  const handleOnClick = (item) => {
    setSelectedFilters((prev) => prev.filter((filter) => filter !== item));
  };

  const clearHandleAll = () => {
    setFilteredJobs(data2);
    setSelectedFilters([]);
  };

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredJobs(data2);
    } else {
      const filtered = data2.filter((job) =>
        selectedFilters.every((filter) => job.skills.includes(filter))
      );
      setFilteredJobs(filtered);
    }
  }, [selectedFilters, data2]);

  const list2 = () => {
    return filteredJobs.map((item, index) => (
      <>
        <JobItem key={index} job={item} buttonHandler={buttonHandler} />
        <Search
          selectedFilters={selectedFilters}
          handleOnClick={handleOnClick}
          clearHandleAll={clearHandleAll}
        />
      </>
    ));
  };

  return <div className="job-list">{list2()}</div>;
}

export default JobList1;
