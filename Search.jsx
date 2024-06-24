import React from "react";
import "../styles/SearchBar.css";

const Search = ({ selectedFilters = [], handleOnClick, clearHandleAll }) => {
  const updatedList = selectedFilters.map((item, index) => {
    return (
      <>
        <button
          className="searchbtn"
          key={index}
          onClick={() => handleOnClick(item)}
        >{`${item} ❌`}</button>
      </>
    );
  });

  return (
    <div className="search-bar  flex3">
      <div>{updatedList}</div>
      <button className="clear" onClick={() => clearHandleAll()}>
        {"Clear All"}
      </button>
    </div>
  );
};
export default Search;
