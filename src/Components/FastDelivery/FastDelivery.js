import React from "react";
import "../FastDelivery/FastDelivery.css";
import customorsatisfaction from "../../Images/Customer Support.svg";
import competativeadvntage from "../../Images/Fast Track.svg";
import reputation from "../../Images/Vector.svg";
import Deliverybox from "../../Images/Deliverybox.png";
import imagebginfd from "../../Images/imagebginfd.svg";
import imagebginfd2 from "../../Images/imagebginfd2.png";

const FastDelivery = () => {
  return (
    <>
      <div className="container fastdeliveycnt">
        <div className="row">
          <h1 className="fstdelheaddisnone">Easy and Fast</h1>
          <h1 className="fastdeliveyheading">Fast delivery boosts:</h1>
          <div className="col-md-6">
            <div className="imgandheadingcntinfd mt-4">
              <div className="imgsurroundedbox">
                <img
                  src={customorsatisfaction}
                  className="card-img-top img-fluid imgcntinfastdelivery"
                  alt="..."
                />
              </div>
              <div className="headingsurroundedboxinfd">
                <h5 className="fdfirstheading">
                  Increased customer satisfaction and loyalty
                </h5>{" "}
                <p className="fdfirstpara">
                  By offering fast delivery, businesses can improve customer
                  satisfaction and loyalty. Customers appreciate receiving their
                  orders quickly and reliably, and are more likely to return to
                  businesses that offer fast delivery.{" "}
                </p>{" "}
              </div>
            </div>
            <div className="imgandheadingcntinfd mt-4 ">
              <div className="imgsurroundedbox">
                <img
                  src={competativeadvntage}
                  className="card-img-top img-fluid imgcntinfastdelivery"
                  alt="..."
                />
              </div>
              <div className="headingsurroundedboxinfd">
                <h5 className="fdfirstheading">
                  Competitive advantage over other businesses with slower
                  delivery times
                </h5>{" "}
                <p className="fdfirstpara">
                  In today's fast-paced digital marketplace, businesses need to
                  differentiate themselves from their competitors. Offering fast
                  delivery can be a key differentiator, giving businesses a
                  competitive edge in attracting and retaining customers.
                </p>{" "}
              </div>
            </div>
            <div className="imgandheadingcntinfd mt-4 ">
              <div className="imgsurroundedbox3">
                <img
                  src={reputation}
                  className="card-img-top img-fluid imgcntinfastdelivery"
                  alt="..."
                />
              </div>
              <div className="headingsurroundedboxinfd">
                <h5 className="fdfirstheading">Improved brand reputation</h5>{" "}
                <p className="fdfirstpara">
                  Offering fast delivery can improve a business's brand
                  reputation by demonstrating its commitment to customer
                  satisfaction and quality service. Customers are more likely to
                  perceive a business that offers fast and reliable delivery as
                  being trustworthy, professional, and customer-focused, which
                  can lead to positive word-of-mouth and repeat business.
                  Additionally, a positive brand reputation can help businesses
                  attract new customers and stand out in a crowded market.
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-6 fsboximgcnt">
            <div className="card Deliveryboxcnt">
              <img
                src={imagebginfd}
                className="card-img-top blurimgbg"
                alt="..."
              />
              <img
                src={Deliverybox}
                className="card-img-top Deliveryboximg"
                alt="..."
              />
              <div className="card-body">
                <h4>Delivering Your Satisfaction -</h4>
                <p className="card-text">
                  Let us take the stress out of shipping with our efficient and
                  trustworthy delivery solutions that ensures your deliveries
                  are safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FastDelivery;
