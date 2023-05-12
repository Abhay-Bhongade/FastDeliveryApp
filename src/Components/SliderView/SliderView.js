import React, { useState } from "react";
import wclogo from "../../Images/wclogo.png";
import shophipysvg from "../../Images/shophipysvg.svg";
import micros1 from "../../Images/micros1.png";
import oraclesvg from "../../Images/oraclesvg.svg";
import wixsvg from "../../Images/wixsvg.svg";
import sliderarrowsvg from "../../Images/sliderarrowsvg.svg";
import "./SliderView.css";

import CustomSlider from "react-slick";
const SliderView = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false, // add this line
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          dotsClass: "custom-dots",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid slidercnt mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="imgcntinslider">
              <img
                src={shophipysvg}
                className="card-img-top cmnimg"
                alt="..."
              />{" "}
              <img
                src={wclogo}
                className="card-img-top cmnimg wclogoimg"
                alt="..."
              />{" "}
              <img src={oraclesvg} className="card-img-top cmnimg" alt="..." />{" "}
              <img src={micros1} className="card-img-top cmnimg" alt="..." />{" "}
              <img src={wixsvg} className="card-img-top cmnimg" alt="..." />{" "}
              <img
                src={sliderarrowsvg}
                className="card-img-top cmnimg"
                alt="..."
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="container slidercntmobile">
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
      </div>
    </>
  );
};

export default SliderView;
