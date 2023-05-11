import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Navbars/Navbars.css";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <h3>LOGO</h3>
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">My work</a>
          <a href="/#">Blog</a>
          <a href="/#">About me</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <div className="navbar-btn">
          <button type="button" className="btn btn-danger">
            {" "}
            Book a meeting{" "}
          </button>{" "}
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar;
