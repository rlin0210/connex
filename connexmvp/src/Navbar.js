import { Link } from "react-router-dom";
import "./Navbar.css";
import connex from "./icons/logo.png";
import setting from "./icons/setting.png"
import home from "./icons/home.png"
import compare from "./icons/compare.png"


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={connex} alt="connex logo" className="logo"/>

      <div className="links">
        <div className="container">
          <img src={home} alt="home icon" className="icons"/>
          <Link to="/">Home</Link>
        </div>
        <div className="container">
          <img src={compare} alt="home icon" className="icons"/>
          <Link to="/">Compare</Link>
        </div>
        <div className="container">
          <img src={setting} alt="home icon" className="icons"/>
          <Link to="/">Settings</Link>
        </div>
        {/* <div className="container">
          <Link to="/create">Create</Link>
        </div> */}
      </div>
    </nav>
  );
}
 
export default Navbar;