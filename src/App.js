import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Standards from "./Components/Standards/Standards";
import BetaQuiz from "./Components/BetaQuiz/BetaQuiz";
import ProductInquiry from "./Components/ProductInquiry/ProductInquiry";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Standards />
      <BetaQuiz />
      <ProductInquiry />
      <Footer />
    </div>
  );
}

export default App;
