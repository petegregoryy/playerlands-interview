import React from "react";
import MenuIcon from "../assets/menu-icon.png";
import "../css/mobilecategorybar.css";

const MobileCategoryBar = ({ toggleCategories }) => {
    return (
        <button className="mobile-category" onClick={toggleCategories}>
            <img className="mobile-category-icon" src={MenuIcon} />
            <label className="mobile-category-label">SELECT A CATEGORY</label>
        </button>
    );
};

export default MobileCategoryBar;
