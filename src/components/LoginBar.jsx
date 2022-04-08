import React from "react";
import "../css/loginbar.css";
import HomeIcon from "../assets/home.png";
import CartIcon from "../assets/cart.png";

const LoginBar = ({ showLoginTrue }) => {
    return (
        <div className="loginbar-container">
            <div className="loginbar">
                <button
                    className="nav-button"
                    style={{
                        float: "left",
                        lineHeight: 1.7,
                        verticalAlign: "middle",
                        marginTop: 35,
                    }}
                >
                    <img
                        className="nav-button-icon"
                        src={HomeIcon}
                        style={{ filter: "none", height: 30 }}
                    />
                    <label
                        className="nav-button-label"
                        style={{ margin: 10, verticalAlign: "middle" }}
                    >
                        Home
                    </label>
                </button>
                <button className="login-button" onClick={showLoginTrue}>
                    <div>
                        <img className="login-button-icon" src={CartIcon} />
                        <label className="login-button-label">Login</label>
                    </div>
                    <p className="login-button-subtitle">Start Shopping!</p>
                </button>
            </div>
        </div>
    );
};

export default LoginBar;
