import React from "react";
import Header from "../templates/Header/Header";
import Slider from "../templates/Slider/Slider"
// import Insta from "../templates/instagram/instagram"

const Home = () => {

  const inner ={
    padingTop: "50px",
    width: "80%",
  margin: "0 auto",
  maxWidth: "500px",
   }
  const bodyInner ={

    background: "#fff8dc"
  }
 
  return (
    <div style = {bodyInner}>
      <Header />
      <div style={inner}>
        <Slider  />
        {/* <Insta /> */}
        
      </div>
    </div>

  )
};






export default Home;