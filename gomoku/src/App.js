import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/GomokuHeader/NavbarComponent'
import Footer from './components/GomokuFooter/FooterComponent'
// import GomokuSide from './components/GomokuSide'

import Board from './components/Board'
import WelcomeModal from './components/WelcomeModal'
import Games from './components/Games'

function App() {
    return (
        <div className="layout-container">
            <div className="header-container">
                <Navbar />
            </div>
            <div className="app-container">
                <div className="main-container">
                    <Router>
                        <Routes>
                            <Route path="/" element={<WelcomeModal />} />
                            <Route path="/newRoom" element={<Board />} />
                            <Route path="/chooseRoom" element={<Games />} />
                        </Routes>
                    </Router>
                </div>
                {/* <div className="side-container">
                    <GomokuSide />
                </div> */}
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default App
