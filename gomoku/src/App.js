import "./App.css";
import React from "react";
import Games from "./components/Games"
import Board from "./components/Board";
import Navbar from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";

function App() {
  return (
    <div>
      <h1>HELLO WORLD</h1>
      <Games></Games>
      <Navbar />
      <Board></Board>
      <Footer />
    </div>
  );
}

export default App;
