import React from "react";
import "../styles/Filter.css";

function Filter(val, skillset) {
  const filterData = [
    "MONGODB",
    "POSTGRESQL",
    "REDIS",
    "HTML",
    "CSS",
    "JAVA",
    "NODE.JS",
    "REACTJS",
    "BACKBONE.JS",
    "RUBY",
    "IIT",
    "NIT",
    "COREJS",
    "CORE JAVA",
    "JAVA - SPRING FRAMEWORK",
    "J2EE",
    "JAVA-ORM",
    "JAVA-SWING APPLET",
    "PYTHON",
  ];
  const filtering = filterData.map((item) => {
    if (val === item) {
      const result = skillset.filter(item);
    }
  });
  // return (

  // )
}

export default Filter;
