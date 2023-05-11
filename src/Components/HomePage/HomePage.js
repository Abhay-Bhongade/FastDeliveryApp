import React from "react";
import vehicleback from "../../Images/vehicleback.png";
import Navbgimg from "../../Images/Navbgimg.png";
import leftsideimgcnt2mobile from "../../Images/leftsideimgcnt2mobile.png";

import rightsidehmpgimg from "../../Images/rightsidehmpgimg.png";
import FastDeliverArrow1 from "../../Images/FastDeliverArrow1.png";
import arrowandbutton from "../../Images/arrowandbutton.png";

import "../HomePage/HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid">
        <img src={Navbgimg} className="card-img-top Navbgimg" alt="..." />
        <img
          src={leftsideimgcnt2mobile}
          className="card-img-top leftsideimgcnt2mobile"
          alt="..."
        />
        <img
          src={rightsidehmpgimg}
          className="card-img-top rightsidehmpgimg"
          alt="..."
        />
        <div className="row">
          <div className="col-md-6">
            <div className="homepgheadingcontainer">
              <h1 className="homepgheading">We almost deliver </h1>
              <h1 className="homepgheading">anything, anywhere...</h1>
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
              {/* <img src={arrowandbutton} className="card-img-top arrowandbuttonimg" alt="..." /> */}
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={vehicleback}
              className="card-img-top vehiclebackimg"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
