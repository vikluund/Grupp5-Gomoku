import './App.css'
import React from 'react'
import Board from './components/Board'
import Navbar from './components/GomokuHeader/NavbarComponent'
import Footer from './components/GomokuFooter/FooterComponent'

function App() {
    return (
        <div>
            <Navbar />
            <Board></Board>
            <Footer />
        </div>
    )
}

export default App
