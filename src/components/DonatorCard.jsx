import React from "react";

import FullBodyImage from "../assets/full-model.png";

const DonatorCard = () => {
    return (
        <div className="card donator">
            <div className="donator-model-container">
                <img
                    className="donator-model unselectable"
                    src={FullBodyImage}
                    alt="full-body-model"
                    title="Top Donator"
                />
            </div>
            <div className="donator-text-container unselectable">
                <label className="donator-title">Top Donator</label>
                <p className="donator-body">
                    <b>ItsJakeOk</b>, donated the most this month.
                </p>
            </div>
        </div>
    );
};

export default DonatorCard;
