import "./App.css";
import React from "react";
import Board from "./components/Board";
import Navbar from "./components/GomokuHeader/NavbarComponent";
import Footer from "./components/GomokuFooter/FooterComponent";
import GomokuSide from "./components/GomokuSide";

function App() {
    return (
        <div className="layout-container">
            <div className="header-container">
                <Navbar />
            </div>
            <div className="app-container main-background">
                <div className="main-container">
                    <Board></Board>
                </div>
                <div className="side-container">
                    <GomokuSide />
                </div>
            </div>
            <Footer />
            {/*
            <div style={{ backgroundColor: '#000' }}>
                <p></p>
                FOOTER
                <p></p>
            </div>
            */}
        </div>
    )
}

export default App;
