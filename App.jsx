import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Search from "./Search";
import JobList1 from "./JobList1";
import { data } from "./Data";
import "../styles/App.css";

function App() {
  // const [searchQuery, setSearchQuery] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://boppotech-admin.github.io/react-task-json.github.io/joblist.json"
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setJobs(data))
  //     .catch((error) => console.error("Fetch error: ", error));
  // }, []);

  return (
    <div className="App">
      <Banner />
      <Search />
      <JobList1 job={data} />
    </div>
  );
}

export default App;

