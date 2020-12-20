import React from "react";
import logo from "../../pages/img/logo.png"
import { HeaderNav} from "./HeaderStyles"


const Header = () => {

  const Hederinner = {
    height: "80px",
    width: "80%",
    margin: "0 auto",
    maxWidth: "500px",
  }

  return (

    <>
      <HeaderNav>
        <img src={logo} alt={logo} style={ Hederinner}/>

      </HeaderNav>

    </>

  )

}

export default Header;