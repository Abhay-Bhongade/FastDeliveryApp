import React, { useState } from "react";
import homepagevan from "../../Images/homepagevan.png";
import Navbgimg from "../../Images/Navbgimg.png";
import Navbgimgformobile from "../../Images/Navbgimgformobile.png";

import homepagetooltip from "../../Images/homepagetooltip.png";
import FastDeliverArrow1 from "../../Images/FastDeliverArrow1.png";
import FastDeliverArrow2 from "../../Images/FastDeliverArrow2.png";

import Tooltipa1 from "../../Images/Tooltipa1.png";

import "../HomePage/HomePage.css";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div className="container-fluid">
        <img src={Navbgimg} className="card-img-top Navbgimg" alt="..." />
        <img
          src={Navbgimgformobile}
          className="card-img-top Navbgimgformobile"
          alt="..."
        />

        <div className="row">
          <div className="col-md-5">
            <div className="homepgheadingcontainer">
              <h1 className="homepgheading">We almost deliver </h1>
              <h1 className="homepgheading headingoverlap">
                anything,anywhere...
              </h1>
            </div>
            <div className="btncontainer">
              <button
                className="getstartedbtn ms-2"
                type="button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* <img
                  src={FastDeliverArrow1}
                  className="card-img-top FastDeliverArrow1img"
                  alt="..."
                /> */}
                <img
                  src={isHovered ? FastDeliverArrow2 : FastDeliverArrow1}
                  className="card-img-top FastDeliverArrow1img"
                  alt="..."
                />
                <span className="ms-2">Get Started</span>
              </button>
              <button className="registerherebtn ms-4" type="button">
                Register Here
              </button>
              <img
                src={homepagetooltip}
                className="card-img-top arrowandbuttonimg"
                alt="..."
              />
            </div>
          </div>

          <div className="vehicnt  col-md-7 my-md-0 my-2">
            <img
              src={homepagevan}
              className="card-img-top vehiclebackimg img-fluid"
              alt="..."
            />
            {/* <img
              src={vehicleback1mobile}
              className="card-img-top vehiclebackimg img-fluid"
              alt="..."
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
