import React from "react";

export default function Search(Props) {
  return (
    <div className="searchContainer">
      <i className="fa-solid fa-magnifying-glass magnifyingGlass"></i>
      <input
        type="text"
        name="countrySearch"
        id="countrySearch"
        placeholder="Search for country..."
        onChange={(e) => Props.setQuery(e.target.value.toLowerCase())}
      />
    </div>
  );
}
