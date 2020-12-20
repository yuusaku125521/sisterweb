import React from "react";
import Slider from "react-slick";
import img1 from "../../pages/img/img1.jpg"
import img2 from "../../pages/img/img2.jpg"
// import img3 from "../../pages/img/img3.jpg"
import img4 from "../../pages/img/img4.jpg"
import img5 from "../../pages/img/img5.jpg"
import img6 from "../../pages/img/img6.jpg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const Sliderstyle = {

    height: "390px",
    width: "480px",
    color: "#fff",
    background: "red"
  };

  const bodystyle = {
    height: "390px",
    width: "480px",
    color: "#fff",
    background: "#ffed3c"
  };



  return (

    <Slider {...settings} style={bodystyle}>

      <div>
        <img src={img1} style={Sliderstyle} alt={"img1"}/>
      </div>
      <div>
        <img src={img2} style={Sliderstyle} alt={"img2"}/>
      </div>
      {/* <div>
        3<img src={img3} style={Sliderstyle} alt={"img3"}/>
      </div> */}
      <div>
        <img src={img4} style={Sliderstyle} alt={"img4"}/>
      </div>
      <div>
        <img src={img5} style={Sliderstyle} alt={"img5"}/>
      </div>
      <div>
        <img src={img6} style={Sliderstyle} alt={"omg6"}/>
      </div>
    </Slider>
  );
}

export default SimpleSlider;