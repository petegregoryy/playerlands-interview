import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import LogoBar from "./components/LogoBar";
import LoginBar from "./components/LoginBar";
import CardHolder from "./components/CardHolder";

import { useEffect, useState } from "react";
import LoginModal from "./components/LoginModal";

function App() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [showLogin, setShowLogin] = useState(false);
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
            <LoginBar setShowLogin={setShowLogin} />
            <CardHolder />
            {showLogin && <LoginModal setShowLogin={setShowLogin} />}
        </div>
    );
}

export default App;
