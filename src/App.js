import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import LogoBar from "./components/LogoBar";
import LoginBar from "./components/LoginBar";
import CardHolder from "./components/CardHolder";

function App() {
    return (
        <div className="App">
            <Navbar />
            <LogoBar />
            <LoginBar />
            <CardHolder />
        </div>
    );
}

export default App;
