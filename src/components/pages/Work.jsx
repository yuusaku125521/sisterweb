import React from "react";
import img10 from "./img/img10.jpg"
import img11 from "./img/img11.jpg"
import img12 from "./img/img12.jpg"
import Header from "../templates/Header/Header";
import Footer from "../templates/Footer/Footer";
import { WorkBody} from "./WorkStyle"



const Work = () => {

  const imginner2 = {

    height: "550px",
    width: "420px",
  }

  const bodyInner = {
    background: "#fff8dc"
  }


const imginner  = {

  height: "470px",
  width: "420px",
}
const warp = {
  margin: "0",
  fontFamily: 'Courier New'
}

  return (
    < div style={bodyInner}>
      <Header />
      <WorkBody>

        <h1 style={warp }>Work</h1>
       
          <h2>2020年5月</h2>
         
        
         こけこっこ食堂様{<a href="https://www.instagram.com/cokecocco_shokudou/?hl=ja" >(cokecocco_shokudou)</a>}の<br />看板メニューのイラストを制作
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

    </div>
  )
};






export default Work;