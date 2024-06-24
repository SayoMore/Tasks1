import React from "react";
import Banner from "./Banner";
import Search from "./Search";
import JobList1 from "./JobList1";
import { data } from "./Data";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <Search />
      <JobList1 job={data} />
    </div>
  );
}

export default App;
