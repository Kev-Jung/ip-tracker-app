import arrowImg from "../../images/icon-arrow.svg";
import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search for any IP address or domain" />
      <button className="searchbar-btn">
        <img src={arrowImg} />
      </button>
    </div>
  );
};

export default Searchbar;
