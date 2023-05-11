import React, { useState } from "react";
import fastlogonavbar from "../../Images/fastlogonavbar.png";
import "../../Components/Navigation/Navigation.css";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navcontainer">
      <div className="container-fluid navcntmain">
        <div className="row">
          <div className="col-12">
            <div className="navbar">
              <div>
                <img
                  src={fastlogonavbar}
                  className="card-img-top fastlogonavbarimg"
                  alt="..."
                />
              </div>
              <div className="nblinks">Who is it for?</div>
              <div className="nblinks">What is unique?</div>
              <div className="nblinks">What we do?</div>
              <button type="button" className="btn btn-danger btndn">
                {" "}
                Book a meeting{" "}
              </button>{" "}
              <div className={`navbars-links ${showMenu ? "show" : ""}`}>
                <div>Who is it for?</div>
                <div>What is unique?</div>
                <div>What we do?</div>
                <button type="button" className="btn btn-danger">
                  {" "}
                  Book a meeting{" "}
                </button>{" "}
              </div>
              <div className="hamburger-menu" onClick={handleMenuClick}>
                <div
                  className={`hamburger-line ${showMenu ? "line1" : ""}`}
                ></div>
                <div
                  className={`hamburger-line2 ${showMenu ? "line2" : ""}`}
                ></div>
                <div
                  className={`hamburger-line ${showMenu ? "line3" : ""}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
