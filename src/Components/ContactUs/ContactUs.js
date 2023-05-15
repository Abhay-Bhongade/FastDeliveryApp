import React, { useState } from "react";
import ArrowRight from "../../Images/ArrowRight.png";
import ArrowRight2 from "../../Images/ArrowRight2.png";
import contactusvanimg from "../../Images/contactusvanimg.png";
import contactuspagevan from "../../Images/contactuspagevan.png";

import "../ContactUs/ContactUs.css";

const ContactUs = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="py-5">
      <div className="container contactuscnt1 contactuscnt">
        <div className="row">
          <div className="col-md-6">
            <div className="headingandimgctnincu">
              <h1 className="contactusheading mt-md-4">Contact Us :</h1>
              <p className="contactuspara   ">
                Contact Us for any information and support. we are available 24
                hours for you.
              </p>
              <div className="">
                <img
                  src={contactuspagevan}
                  className="card-img-top img-fluid vehiclefront11"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 colcntincu">
            <div className="card formcnt">
              <div className="btnandformcnt">
                <div className="btncontainerincntctus ms-3 ms-md-0 mt-5 mt-md-0">
                  <button className="courierbtn" type="button">
                    Courier
                  </button>
                  <button className="businessesbtn" type="button">
                    Businesses
                  </button>
                </div>
                <form className="formcntincu">
                  <input
                    type="text"
                    id="mobilenumber"
                    placeholder="Mob. No."
                    className="mobileinput2"
                  />
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="mobileinput2"
                  />
                  {/* <input
                    type="text"
                    placeholder="Mob. No."
                    className="mobileinput"
                  />{" "}
                  <input
                    type="email"
                    placeholder="Email"
                    className="mobileinput"
                  /> */}
                  <textarea
                    className="textareacnt "
                    rows={4}
                    cols={50}
                    maxLength={100}
                    placeholder="Enter your message here....."
                  />
                  <button
                    className="sendmessagebtn"
                    type="button"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span className="ms-2">Send Message</span>{" "}
                    <img
                      src={isHovered ? ArrowRight2 : ArrowRight}
                      className="card-img-top ArrowRightimg"
                      alt="..."
                    />
                  </button>
                </form>

                <form className="formcntincuformobile">
                  <div className="inputlabeltext my-3">First Name</div>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="debra"
                    className="firstnamemobileinput"
                  />
                  <div className="inputlabeltext  my-3">Last Name</div>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="holt"
                    className="firstnamemobileinput"
                  />
                  <div className="inputlabeltext  my-3">Email</div>
                  <input
                    type="text"
                    className="firstnamemobileinput"
                    id="lastname"
                    placeholder="debra.holt@example.com"
                  />
                  <div className="inputlabeltext  my-3">Mobile No.</div>
                  <input
                    type="text"
                    id="lastname"
                    className="firstnamemobileinput"
                    placeholder="+91 123-45-897"
                  />
                  {/* <input
                    type="text"
                    placeholder="Mob. No."
                    className="mobileinput"
                  />{" "}
                  <input
                    type="email"
                    placeholder="Email"
                    className="mobileinput"
                  /> */}
                  <div className="inputlabeltext  my-3">Messages</div>
                  <textarea
                    className="textareainmobile "
                    rows={4}
                    cols={50}
                    maxLength={100}
                    placeholder="Enter your message here....."
                  />
                  <div className="btncntincu mt-3">
                    {/* <button className="sendmessagebtn" type="button">
                      <span className="ms-2">Send Message</span>{" "}
                      <img
                        src={ArrowRight}
                        className="card-img-top ArrowRightimg"
                        alt="..."
                      />
                    </button> */}
                    <button
                      className="sendmessagebtn"
                      type="button"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className="ms-2">Send Message</span>{" "}
                      <img
                        src={isHovered ? ArrowRight2 : ArrowRight}
                        className="card-img-top ArrowRightimg"
                        alt="..."
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
