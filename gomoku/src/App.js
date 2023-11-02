import "./App.css";
import React from "react";
import Games from "./components/Games"
import Board from "./components/Board";
import Navbar from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";

function App() {
  return (
    <div>
      <Navbar />
      <Games></Games>
      <Board></Board>
      <Footer />
    </div>
  );
}

export default App;
