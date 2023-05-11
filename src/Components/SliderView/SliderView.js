import React, { useState } from "react";
import woocommercebg from "../../Images/woocommercebg.png";
import shopify from "../../Images/shopify.png";
import micros1 from "../../Images/micros1.png";
import oracle from "../../Images/oracle.png";
import wix from "../../Images/wix.com.png";
import sliderarrow from "../../Images/sliderarrow.png";
import "./SliderView.css";

import Slider from "react-slick";
const SliderView = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
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
      <div className="container-fluid slidercnt">
        <div className="row">
          <div className="col-md-12">
            <div className="imgcntinslider">
              <img src={shopify} className="card-img-top cmnimg" alt="..." />{" "}
              <img
                src={woocommercebg}
                className="card-img-top cmnimg"
                alt="..."
              />{" "}
              <img src={oracle} className="card-img-top cmnimg" alt="..." />{" "}
              <img src={micros1} className="card-img-top cmnimg" alt="..." />{" "}
              <img src={wix} className="card-img-top cmnimg" alt="..." />{" "}
              <img
                src={sliderarrow}
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
            <Slider {...settings}>
              <div className="imgcntinslider">
                <img src={shopify} className="card-img-top cmnimg" alt="..." />{" "}
              </div>
              <div>
                <img
                  src={woocommercebg}
                  className="card-img-top cmnimg"
                  alt="..."
                />{" "}
              </div>
              <div>
                <img src={oracle} className="card-img-top cmnimg" alt="..." />{" "}
              </div>
              <div>
                <img src={micros1} className="card-img-top cmnimg" alt="..." />{" "}
              </div>

              <div>
                <img src={wix} className="card-img-top cmnimg" alt="..." />{" "}
              </div>

              <div>
                <img
                  src={sliderarrow}
                  className="card-img-top cmnimg"
                  alt="..."
                />{" "}
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderView;
