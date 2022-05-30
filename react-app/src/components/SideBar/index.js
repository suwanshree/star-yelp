import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = () => {
  const user = useSelector((state) => state.session.user);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="side-bar-container">
      <div className="side-bar">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="search-input"
          placeholder="Search Listings..."
          value={searchText}
        />
        <button className="search-submit" type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
