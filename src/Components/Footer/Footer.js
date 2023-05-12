import React from "react";
import fastlogofooter from "../../Images/fastlogofooter.png";
import "../../Components/Footer/Footer.css";
import facebook from "../../Images/facebook.png";
import youtube from "../../Images/youtube.png";
import instagram from "../../Images/instagram.png";
import twitter from "../../Images/twitter.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footercnt  py-md-5 py-0a">
        <div className="row">
          <div className="col-md-4">
            <div className="fdimgandhdcnt">
              <img
                src={fastlogofooter}
                className="card-img-top fastdeliveryimg"
                alt="..."
              />
              <p className="DeliverAnythingpara">
                Deliver Anything, <br /> Anywhere
              </p>
              <p className="DeliverAnythingpara2 mt-1">
                Deliver Anything, Anywhere
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <div className="addresscnt">
                <h4 className="addressheading">Address: </h4>
                <p className="addresspara">
                  6391 Elgin St. Celina, Delaware 10299
                </p>
              </div>
              <div className="addresscnt">
                <h4 className="addressheading">Phone: </h4>
                <p className="addresspara">+24 3652 2354</p>
              </div>
              <div className="addresscnt">
                <h4 className="addressheading">Email: </h4>
                <p className="addresspara">Admin@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Newslettercnt">
              <h4 className="addressheading newsltrheading">Newsletter:</h4>
              <div className="inputandbtncnt">
                <input
                  type="text"
                  className="emailinput"
                  placeholder="Your email here"
                />
                <button className="suscribebtn ms-2" type="button">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="socialcnt my-4">
              <h4 className="addressheading">Social:</h4>
              <div className="mt-md-4">
                <img
                  src={facebook}
                  className="card-img-top imgsocial"
                  alt="..."
                />
                <img
                  src={youtube}
                  className="card-img-top imgsocial mx-3"
                  alt="..."
                />
                <img
                  src={twitter}
                  className="card-img-top imgsocial"
                  alt="..."
                />
                <img
                  src={instagram}
                  className="card-img-top imgsocial ms-3"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="lastfootercnt">
            <p className="text-center m-0 lastfooterpara ">
              Fast Delivery Company © 2023. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
