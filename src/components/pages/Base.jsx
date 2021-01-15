import React from "react";
import { Link } from "react-router-dom";
import Header from "../templates/Header/Header";
import InstagramEmbed from 'react-instagram-embed';
import Footer from "../templates/Footer/Footer"


export default function Base() {

  return (
    <>
      <Header />
      <Link to="./home"><p>Home</p></Link>
      <Link to="./profile"><p>Profile</p></Link>
      <h1>Base</h1>
      <div>
      <InstagramEmbed
        url='https://instagr.am/p/Zw9o4/'
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
      /></div>
      <Footer />
     
    </>
  );


};