import React, { useState } from "react";
import wclogo from "../../Images/wclogo 2.svg";
import wclogo2 from "../../Images/woocomm.png";

import shophipysvg from "../../Images/shophipysvg.svg";
import micros1 from "../../Images/micros1.svg";
import oraclesvg from "../../Images/oraclesvg.svg";
import wixsvg from "../../Images/wixsvg.svg";
import sliderarrowsvg from "../../Images/sliderarrowsvg.svg";
import wixlogo2 from "../../Images/Wix.com_Logo2.png";
import ShopifyLogo2 from "../../Images/ShopifyLogo2.png";
import Oraclelogo from "../../Images/Oracle_logo.png";

import microslogo from "../../Images/micros-logopng.png";
import "./SliderView.css";
import Slider from "react-slick";
import CustomSlider from "react-slick";
const SliderView = () => {
  const settings2 = {
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          dots: true,
          dotsClass: "custom-dots",
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          dots: true,
          slidesToScroll: 2,
          centerMode: false,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid slidercnt mt-5 mb-0">
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings2} className="slidercntmain">
              <div>
                <img src={ShopifyLogo2} alt="..." className="shopifyimgselect" />
              </div>

              <div>
                <img src={wclogo2} className="wcimgselect" alt="..." />
              </div>

              <div>
                <img src={Oraclelogo} alt="..." className="oracleimgselect" />
              </div>

              <div>
                {" "}
                <img src={microslogo} alt="..." className="microslogoimg" />
              </div>

              <div>
                <img src={wixlogo2} alt="..." className="wiximgselect" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderView;

// var settings = {
//   dots: true,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 2,
//   slidesToScroll: 2,
//   initialSlide: 0,
//   arrows: false, // add this line
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         dots: true,
//         dotsClass: "custom-dots",
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         dots: true,
//       },
//     },
//   ],
// };

{
  /* <div className="container slidercntmobile">
        <div className="row">
          <div className="col-md-12">
            <CustomSlider {...settings}>
              <div className="imgcntinslider">
                <img
                  src={shophipysvg}
                  className="card-img-top cmnimg"
                  alt="..."
                />{" "}
              </div>
              <div>
                <img
                  src={wclogo}
                  className="card-img-top cmnimg wclogoimg"
                  alt="..."
                />{" "}
              </div>
              <div>
                <img
                  src={oraclesvg}
                  className="card-img-top cmnimg"
                  alt="..."
                />{" "}
              </div>
              <div>
                <img src={micros1} className="card-img-top cmnimg" alt="..." />{" "}
              </div>

              <div>
                <img src={wixsvg} className="card-img-top cmnimg" alt="..." />{" "}
              </div>

              <div>
                <img
                  src={sliderarrowsvg}
                  className="card-img-top cmnimg"
                  alt="..."
                />{" "}
              </div>
            </CustomSlider>
          </div>
        </div>
      </div> */
}
