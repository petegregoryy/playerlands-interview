import React from "react";
import RecentIcon from "../assets/recent.png";

const RecentPayments = () => {
    return (
        <div className="card payments">
            <div className="payments-header">
                <img className="payments-icon" alt="balance" src={RecentIcon} />
                <label className="payments-title">Recent Transactions</label>
            </div>
            <div className="payments-head-holder">
                <img
                    className="payments-head"
                    alt="transaction-head"
                    src="https://s.namemc.com/2d/skin/face.png?id=8bd25c1c3b639665&scale=4"
                />
                <label className="payments-head-hover">ItsJakeOk</label>
            </div>
        </div>
    );
};

export default RecentPayments;
