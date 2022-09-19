import arrowImg from "../../images/icon-arrow.svg";
import "./Searchbar.css";
import { useState } from "react";

const Searchbar = ({ fetchApi }) => {
  const [searchField, setSearchField] = useState("");

  function validateIPaddress(ipAddress) {
    // Regex to validate each octect in the IP address between 0 -255
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      ipAddress
    )
      ? // invokes API to get data on valid IP
        fetchApi(ipAddress)
      : alert("Please enter a valid IP address!");
  }

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search for any IP address"
        onChange={(e) => setSearchField(e.target.value)}
        value={searchField}
      />
      <button
        className="searchbar-btn"
        onClick={() => validateIPaddress(searchField)}
      >
        <img src={arrowImg} alt="submit button" />
      </button>
    </div>
  );
};

export default Searchbar;
