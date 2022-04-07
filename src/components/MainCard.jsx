import React from "react";
import BlueDot from "../assets/blue-fade-circle.png";
import RedDot from "../assets/red-fade-circle.png";

const MainCard = () => {
    return (
        <div className="card main-card">
            <img
                className="background-dot dot-left unselectable"
                src={RedDot}
            />
            <img
                className="background-dot dot-right unselectable"
                src={BlueDot}
            />
            <h1>PLAYERLANDS</h1>
            <p>
                Please select a category above to browse our packages for sale.
                We accept payments via credit/debit card, PayPal, and dozens of
                other payment methods.
            </p>
            <p>
                <b>Information:</b>
            </p>
            <p>
                Any purchases made on this store are under a strict
                non-refundable policy. if you open a chargeback, you will be
                banned from the PlayerLands platform (which is the platform all
                Minecraft servers use for their stores). All payment types
                process payments immediately. E-checks may take 3-5 business
                days to process. It may take up to 15 minutes for your packages
                to be credited in-game.
            </p>
            <p>
                <b>
                    If you have any questions or converns, please email our
                    payment support team at PlayerLands
                </b>
            </p>
            <p>
                <b>
                    To be directed back to our official website:{" "}
                    <a href="https://playerlands.com">Click here</a>
                </b>
            </p>
            <p>
                This store is not in any way affiliated with Minecraft, Mojang
                AB, and/or Microsoft Cororation. Minecraft is &copy and
                trademark Mojang AB 2009-2021. This store is not in any way
                affiliated with Nintendo, and/or The Pokemon Company. This store
                is a copyright and trademark of Pokemon. TM, Nintendo{" "}
                <b>2021</b>.
            </p>
        </div>
    );
};

export default MainCard;
