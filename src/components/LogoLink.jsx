import React from "react";
import CreeperFace from "../assets/creeper-inverted.png";
import InlinePlayerNumber from "./InlinePlayerNumber";

const LogoLink = ({ text, colour, float, imagePos, link }) => {
    const labelStyle = {
        color: colour,
        fontWeight: 700,
        fontSize: 24,
    };
    const divStyle = {
        float: float,
        margin: 20,
        textAlign: "left",
        maxHeight: 100,
        cursor: "pointer",
    };
    const imgStyle = {
        float: imagePos,
        height: 25,
        backgroundColor: colour,
        padding: 15,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
    };

    function redirect() {
        window.location = link;
    }

    return (
        <div style={divStyle} onClick={redirect}>
            <img alt="Minecraft" src={CreeperFace} style={imgStyle} />
            <div style={{ float: float }}>
                <label className="link-label-header" style={labelStyle}>
                    {text}
                </label>
                <p style={{ marginTop: 1 }}>
                    Join <InlinePlayerNumber /> other people!
                </p>
            </div>
        </div>
    );
};

export default LogoLink;
