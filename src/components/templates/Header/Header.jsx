import React from "react";
import logo from "../../pages/img/logo.png"
import {Nav} from "./HeaderStyles"


const Header = () => {

  const Hederinner = {
    height: "80px",
    width: "80%",
    margin: "0 auto",
    maxWidth: "500px",
  }

  return (

    <>
      <Nav>
        <img src={logo} alt={logo} style={ Hederinner}/>

      </Nav>

    </>

  )

}

export default Header;