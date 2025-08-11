import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";
import logo from "../../public/movie-gallery-app-logo.png"

function NavBar() {
  const [nav, setNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
    // console.log(scrollValue);
  };

  addEventListener("scroll", changeValueOnScroll);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${nav === true ? "sticky navbar" : "navbar"}`}>
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" className="logo" />
        <p>Movie App</p>
      </Link>
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {/* <Link to='/' className="nav-link">Home</Link> */}
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

    </nav>
  );
}

export default NavBar;
