import React from "react";
import fastlogonavbar from "../../Images/fastlogonavbar.png";
import "../../Components/Navigation/Navigation.css";

const Navigation = () => {
  return (
    <div className="container navcntmain">
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
            <div>Who is it for?</div>
            <div>What is unique?</div>
            <div>What we do?</div>
            <div>
              <button type="button" className="btn btn-danger">
                {" "}
                Book a meeting{" "}
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
