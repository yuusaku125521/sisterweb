import React from "react";
import img10 from "./img/img10.jpg"
import img11 from "./img/img11.jpg"
import img12 from "./img/img12.jpg"
import Header from "../templates/Header/Header";
import Footer from "../templates/Footer/Footer";
import { WorkBody} from "./WorkStyle"



const Work = () => {

  const imginner2 = {

    height: "600px",
    width: "480px",
  }

  const bodyInner = {
    background: "#fff8dc"
  }


const imginner  = {

  height: "500px",
  width: "480px",
}
const warp = {
  margin: "0",
  fontFamily: 'Courier New'
}

  return (
    <>
      <Header />
      <WorkBody>

        <h1 style={warp }>Work</h1>
       
          <h2>2020年5月</h2>
         
         地元、大阪府池田市にて<br />お母さん、子育ての応援をするサイト{<a href="https://ikeda.kodomoto.org/" >kodomoto池田</a>}の<br/>
         こけこっこ食堂様{<a href="https://www.instagram.com/cokecocco_shokudou/?hl=ja" >(cokecocco_shokudou)</a>}が取材される際<br/>店の看板メニューのイラストを制作
        <div>
          <img src={img10} alt={"img10"} style={imginner2} />

            <h2>2020年11月</h2>
          <p>みさご珈琲様のドリップバックをデザインを担当<br/>
          ルクア大阪地下2階のキッチン&マーケットにて発売</p>
          <img src={img11} alt={"img11"} style={imginner }/>
          <div >
          <img src={img12} alt={"img12"} style={imginner } />
</div>
</div>





        





      </WorkBody>

      <Footer />

    </>
  )
};






export default Work;