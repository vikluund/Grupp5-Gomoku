import './App.css'
import React from 'react'
import Board from './components/Board'
import Games from './components/Games'
import Navbar from './components/NavbarComponent'
import Footer from './components/FooterComponent'
import GomokuSide from './components/GomokuSide'

function App() {
    return (
        <div>
            <Navbar />
            {/* <Board></Board> */}
            <div className="app-container">
                {' '}
                {/* Använd app-container för att styra layouten */}
                <Board></Board>
                <GomokuSide /> {/* Placera GomokuSide till höger om Board */}
                <Games></Games>
                <Footer />
            </div>
        </div>
    )
}

export default App
