import React from "react";
import "../css/cardholder.css";
import DonatorCard from "./DonatorCard";
import GiftBalanceCard from "./GiftBalanceCard";

const CardHolder = () => {
    return (
        <div className="card-container">
            <div className="columns">
                <div className="card-column left">
                    <DonatorCard />
                    <GiftBalanceCard />
                    <DonatorCard />
                </div>
                <div className="card-column right">
                    <DonatorCard />
                </div>
            </div>
        </div>
    );
};

export default CardHolder;
