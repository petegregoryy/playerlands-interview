import React from "react";
import BalanceIcon from "../assets/balance.png";
const GiftBalanceCard = () => {
    return (
        <div className="card balance">
            <div className="balance-header">
                <img className="balance-icon" alt="balance" src={BalanceIcon} />
                <label className="balance-title">Gift Card Balance</label>
                <label className="balance-amount"> - 0.00 GBP</label>
            </div>
            <form className="balance-form">
                <input
                    className="balance-code"
                    type="text"
                    placeholder="ENTER CODE"
                />
                <input
                    className="balance-submit"
                    type="submit"
                    value="CHECK GIFTCARD"
                />
            </form>
        </div>
    );
};

export default GiftBalanceCard;
