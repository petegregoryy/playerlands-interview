import React from "react";
import "../css/cards.css";
import FullBodyImage from "../assets/full-model.png";

const DonatorCard = () => {
    return (
        <div className="card donator">
            <div className="donator-model-container">
                <img
                    className="donator-model"
                    src={FullBodyImage}
                    alt="full-body-model"
                    title="Top Donator"
                />
            </div>
            <div className="donator-text-container">
                <label className="donator-title">Top Donator</label>
                <p className="donator-body">
                    <b>ItsJakeOk</b>, donated the most this month.
                </p>
            </div>
        </div>
    );
};

export default DonatorCard;
