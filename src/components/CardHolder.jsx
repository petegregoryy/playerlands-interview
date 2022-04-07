import React from "react";
import "../css/cardholder.css";
import "../css/cards.css";
import DonatorCard from "./DonatorCard";
import GiftBalanceCard from "./GiftBalanceCard";
import MainCard from "./MainCard";
import RecentPayments from "./RecentPayments";

const CardHolder = () => {
    return (
        <div className="card-container">
            <div className="columns">
                <div className="card-column left">
                    <DonatorCard />
                    <GiftBalanceCard />
                    <RecentPayments />
                </div>
                <div className="card-column right">
                    <MainCard />
                </div>
            </div>
        </div>
    );
};

export default CardHolder;
