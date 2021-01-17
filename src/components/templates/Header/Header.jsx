import React from "react";
import { HeaderNav } from "./HeaderStyles"


const Header = () => {

  const Hederinner = {

    
    fontSize: "37px",
    fontFamily: 'Courier New'
  }

  return (

    <>
      <HeaderNav>
        <h1 style={Hederinner}>tinako</h1>


      </HeaderNav>

    </>

  )

}

export default Header;