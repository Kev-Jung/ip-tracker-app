import arrowImg from "../../images/icon-arrow.svg";
import "./Searchbar.css";
import { useState } from "react";

const Searchbar = ({ fetchApi }) => {
  const [searchField, setSearchField] = useState("");

  const handleClick = () => {
    console.log(searchField);
    // Need to do some validation to make sure it is an IP address or domain (later)
    // Fetch API using IP address to get response
    fetchApi(searchField);
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        onChange={(e) => setSearchField(e.target.value)}
        value={searchField}
      />
      <button className="searchbar-btn" onClick={handleClick}>
        <img src={arrowImg} />
      </button>
    </div>
  );
};

export default Searchbar;
