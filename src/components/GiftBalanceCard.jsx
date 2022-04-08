import React, { useState } from "react";
import BalanceIcon from "../assets/balance.png";
const GiftBalanceCard = () => {
    const [balance, setBalance] = useState(0.0);

    const formatter = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        minimumFractionDigits: 2,
    });

    const checkCard = (e) => {
        e.preventDefault();
        if (document.getElementById("balance-code").value !== "") {
            setBalance(getRandomNumber(1, 100));
        }
    };

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    return (
        <div className="card balance">
            <div className="balance-header">
                <img className="balance-icon" alt="balance" src={BalanceIcon} />
                <label className="balance-title">Gift Card Balance</label>
                <label className="balance-amount">
                    {" - " + formatter.format(balance)}
                </label>
            </div>
            <form className="balance-form" onSubmit={checkCard}>
                <input
                    id="balance-code"
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
