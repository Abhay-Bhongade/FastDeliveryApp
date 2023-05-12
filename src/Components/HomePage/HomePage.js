import React from "react";
import vehicleback1111 from "../../Images/vehicleback1111.png";
import Navbgimg from "../../Images/Navbgimg.png";
import Navbgimgformobile from "../../Images/Navbgimgformobile.png";

import vehicleback from "../../Images/vehicleback1111.svg";
import FastDeliverArrow1 from "../../Images/FastDeliverArrow1.png";
import Tooltipa1 from "../../Images/Tooltipa1.png";

import "../HomePage/HomePage.css";

const HomePage = () => {
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
          <div className="col-md-12 colclasscnt">
            <div className="col40vw">
              <div className="homepgheadingcontainer">
                <h1 className="homepgheading">We almost deliver </h1>
                <h1 className="homepgheading headingoverlap">
                  anything, anywhere...
                </h1>
              </div>
              <div className="btncontainer">
                <button className="getstartedbtn ms-2" type="button">
                  <img
                    src={FastDeliverArrow1}
                    className="card-img-top FastDeliverArrow1img"
                    alt="..."
                  />{" "}
                  <span className="ms-2">Get Started</span>
                </button>
                <button className="registerherebtn ms-4" type="button">
                  Register Here
                </button>
                <img
                  src={Tooltipa1}
                  className="card-img-top arrowandbuttonimg"
                  alt="..."
                />
              </div>
            </div>

            <div className="vehicnt col60vw">
              <img
                src={vehicleback}
                className="card-img-top vehiclebackimg img-fluid"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
