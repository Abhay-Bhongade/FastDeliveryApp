import React from "react";
import shippingvan from "../../Images/shippingvan.png";
import motorcycledelivery from "../../Images/Motorcycle .png";
import trackingnumber from "../../Images/Tracking .png";
import orderprocessing from "../../Images/Order.png";
import "../../Components/OurSolutions/OurSolutions.css";
import shipvan from "../../Images/Shipping Van .png";

const OurSolutions = () => {
  return (
    <>
      <div className="container py-md-5 py-4 mb-5">
        <div className="row">
          <div className="col-md-12">
            <h2 className="intelogisolheading">
              Integrated Logistics Solutions
            </h2>
            <p className="oursolpara">
              We offer integrated logistics solutions that cover every aspect of
              your supply chain, from transportation and warehousing to
              inventory management and order fulfillment.
            </p>
          </div>
        </div>
        <div className="row">
          <h1 className="text-center mt-3 mt-md-0">OUR SOLUTIONS</h1>
          <div className="col-md-3 col-6">
            {" "}
            <div className="card border-0 imgcntinoursolution">
              <img src={shipvan} className="card-img-top" alt="..." />
            </div>{" "}
          </div>
          <div className="col-md-3 col-6">
            {" "}
            <div className="card border-0 imgcntinoursolution">
              <img
                src={motorcycledelivery}
                className="card-img-top"
                alt="..."
              />
            </div>{" "}
          </div>
          <div className="col-md-3 col-6">
            {" "}
            <div className="card border-0 imgcntinoursolution">
              <img src={trackingnumber} className="card-img-top" alt="..." />
            </div>{" "}
          </div>
          <div className="col-md-3 col-6">
            {" "}
            <div className="card border-0 imgcntinoursolution">
              <img src={orderprocessing} className="card-img-top" alt="..." />
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolutions;
