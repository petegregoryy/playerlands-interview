import React from "react";
import PlayerLandsLogo from "../assets/logo-purple.svg";
import "../css/logobar.css";
import LogoLink from "./LogoLink";

const LogoBar = () => {
    return (
        <div className="logobar-container">
            <div className="logobar">
                <LogoLink
                    text="PLAYERLANDS.COM"
                    colour="#efc75d"
                    float="left"
                    imagePos="right"
                    link="https://playerlands.com"
                />
                <img
                    className="playerlands-logo"
                    alt="PlayerLands Logo"
                    title="PlayerLands"
                    src={PlayerLandsLogo}
                />
                <LogoLink
                    text="DISCORD"
                    colour="#37d2ff"
                    float="right"
                    imagePos="left"
                    link="https://discord.com"
                />
            </div>
        </div>
    );
};

export default LogoBar;
