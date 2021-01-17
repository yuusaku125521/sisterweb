import React from "react";
import Header from "../templates/Header/Header";
import Slider from "../templates/Slider/Slider"
import Footer from "../templates/Footer/Footer"

const Home = () => {

  const inner = {
    padingTop: "50px",
    width: "80%",
    margin: "0 auto",
    maxWidth: "500px",
    height: "600px",
  }
  const bodyInner = {
    background: "#fff8dc"
  }

  const fontInner = {
    margin: "30px",
    marginLeft: "93px",
    fontFamily: 'Courier New'
  }


  return (
    <div style={bodyInner}>
      <Header />

      <div style={inner}>
        <h1 style={fontInner}>artist / painter</h1>
        <Slider />
      </div>
      <Footer />
    </div>

  )
};






export default Home;