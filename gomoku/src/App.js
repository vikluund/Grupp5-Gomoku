import './App.css'
import React from 'react'
import Board from './components/Board'
import Navbar from './components/GomokuHeader/NavbarComponent'
import Footer from './components/GomokuFooter/FooterComponent'
import GomokuSide from './components/GomokuSide';

function App() {
    return (
        <div>
            <Navbar />
            {/* <Board></Board> */}
            <div className="app-container"> {/* Använd app-container för att styra layouten */}
        <Board></Board>
        <GomokuSide /> {/* Placera GomokuSide till höger om Board */}
      </div>
            <Footer />
        </div>
    )
}

export default App
