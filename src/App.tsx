import React from "react";
import Header from "./components/HeaderPage/Header";
import Vision from "./components/VisionPage/Vision";
import Goals from "./components/GoalsPage/Goals";
import Network from "./components/NetworkPage/Network";
import NetworkSecond from "./components/NetworkSecondPage/NetworkSecond";
import Shop from "./components/ShopPage/Shop";
import Contact from "./components/ContactPage/Contact";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Vision></Vision>
      <Goals></Goals>
      {/* <Network></Network> */}
      {/* <NetworkSecond></NetworkSecond> */}
      <Shop></Shop>
      <Contact></Contact>
    </div>
  );
}

export default App;
