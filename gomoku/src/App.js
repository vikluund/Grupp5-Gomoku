import "./App.css";
import React from "react";
import Board from "./components/Board";
import Games from "./components/Games"
import Navbar from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";

function App() {
  return (
    <div>
      <Navbar />
      <Board></Board>
      <Games></Games>
      <Footer />
    </div>
  );
}

export default App
