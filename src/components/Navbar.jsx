import React from "react";
import TwitterLogo from "../assets/twitter.svg";
import TwitchLogo from "../assets/twitch.png";
import BackArrow from "../assets/arrowBack.png";
import "../css/navbar.css";

const Navbar = () => {
    function returnToWebsite() {}

    return (
        <div className="navbar-container">
            <div className="navbar">
                <img
                    className="social-link"
                    src={TwitterLogo}
                    alt="Twitter"
                    title="Twitter"
                />
                <img
                    className="social-link"
                    src={TwitchLogo}
                    alt="Twitch"
                    title="Twitch"
                />
                <button className="nav-button" onClick={returnToWebsite}>
                    <img className="nav-button-icon" src={BackArrow} />
                    <label className="nav-button-label">BACK TO WEBSITE</label>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
