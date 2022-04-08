import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import LogoBar from "./components/LogoBar";
import LoginBar from "./components/LoginBar";
import CardHolder from "./components/CardHolder";

import { useEffect, useState } from "react";
import LoginModal from "./components/LoginModal";
import MobileCategoryBar from "./components/MobileCategoryBar";
import MobileCategoryItem from "./components/MobileCategoryItem";

function App() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [showLogin, setShowLogin] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [categories, setCategories] = useState({});

    function toggleCategories() {
        setShowCategories(!showCategories);
    }
    function showLoginTrue() {
        setShowLogin(true);
        document.body.style.overflow = "hidden";
    }

    function handleWindowResize() {
        setWindowWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        setWindowWidth(window.innerWidth);
    });

    return (
        <div className="App">
            <Navbar />
            {windowWidth > 953 && <LogoBar />}
            {windowWidth > 600 ? (
                <LoginBar setShowLogin={showLoginTrue} />
            ) : showCategories ? (
                <div>
                    <MobileCategoryBar toggleCategories={toggleCategories} />
                    <MobileCategoryItem
                        icon="home.png"
                        text="Home"
                        clickFunction={toggleCategories}
                    />
                    <MobileCategoryItem
                        icon="cart.png"
                        text="Login"
                        clickFunction={showLoginTrue}
                    />
                </div>
            ) : (
                <MobileCategoryBar toggleCategories={toggleCategories} />
            )}
            <CardHolder />
            {showLogin && (
                <LoginModal
                    setShowLogin={setShowLogin}
                    showCategories={showCategories}
                    setShowCategories={setShowCategories}
                />
            )}
        </div>
    );
}

export default App;
