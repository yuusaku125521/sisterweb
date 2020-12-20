import React from "react";
import { Link } from "react-router-dom";
import Header from "../templates/Header/Header";


export default function Base() {

  return (
    <>
      <Header />
      <Link to="./home"><p>Home</p></Link>
      <h1>Base</h1>
      
     
     
    </>
  );


};