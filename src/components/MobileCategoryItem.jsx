import React from "react";
import "../css/mobilecategorybar.css";

const MobileCategoryItem = ({ icon, text, clickFunction }) => {
    return (
        <button className="mobile-category" onClick={clickFunction}>
            <img
                className="mobile-category-icon"
                src={require("../assets/" + icon)}
            />
            <label className="mobile-category-label">{text}</label>
        </button>
    );
};

export default MobileCategoryItem;
