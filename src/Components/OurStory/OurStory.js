import React from "react";
import Tshirt from "../../Images/side-view.png";
import "../OurStory/OurStory.css";

const OurStory = () => {
  return (
    <div>
      <div className="container py-md-5 py-3">
        <div className="row">
          <div className="col-md-6 order-last order-md-first mt-mobile">
            <div className="card border-0 imgcntinourstory">
              <img src={Tshirt} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-md-6 order-first order-md-last">
            <h2 className="ourstoryheading">Our Story</h2>
            <p className="oustpara">
              At Fast Delivery, we believe that every package we handle is more
              than just a box or an envelope. we understand that your shipments
              are important to you, and that's why we treat each one with care
              and attention to detail. from the moment it's delivered to its
              destination, we're here to ensure that everything goes smoothly.
              with fast Delivery, you can trust that your packages are in good
              hands.
            </p>
            <div className="btncntinourstory">
              <a href="#" className="button">
                Learn More{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
