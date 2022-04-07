import React from "react";
import LoginModalIcon from "../assets/login-modal-icon.png";
import "../css/loginmodal.css";

const LoginModal = ({ setShowLogin }) => {
    const hideLogin = (e) => {
        e.preventDefault();
        setShowLogin(false);
        document.body.style.overflow = "unset";
    };
    return (
        <div>
            <div className="login-modal-darken" onClick={hideLogin}></div>
            <div className="login-modal-container">
                <img className="login-modal-icon" src={LoginModalIcon} />
                <h1 className="login-modal-label">
                    Login With Your Minecraft Username
                </h1>
                <form className="login-modal-form" onSubmit={hideLogin}>
                    <input
                        className="login-modal-input"
                        type="text"
                        placeholder="Username"
                    />
                    <br></br>
                    <button className="login-modal-button login-modal-login">
                        LOGIN
                    </button>
                    <button className="login-modal-button login-modal-cancel">
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
