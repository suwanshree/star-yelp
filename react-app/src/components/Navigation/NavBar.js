import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginModal from "../LoginModal";
import SignupModal from "../SignupModal";
import DemoButton from "../auth/DemoButton";
import AddListingModal from "../AddListingModal";
import Profile from "./Profile";
import About from "./About";
import logo from "../../images/logo.png";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <ul className="logged-in-nav">
        <li className="about-button" id="nav-buttons">
          <About />
        </li>
        <li className="add-listing-button" id="nav-buttons">
          <AddListingModal />
        </li>
        <li className="listings-button" id="nav-buttons">
          <NavLink to="/listings" exact={true} className="listings">
            Listings
          </NavLink>
        </li>
        <li className="profile-button" id="nav-buttons">
          <Profile />
        </li>
      </ul>
    );
  } else {
    sessionLinks = (
      <ul className="logged-out-nav">
        <li className="about-button" id="nav-buttons">
          <About />
        </li>
        <li className="demo-button" id="nav-buttons">
          <DemoButton />
        </li>
        <li className="login-button" id="nav-buttons">
          <LoginModal />
        </li>
        <li className="signup-button" id="nav-buttons">
          <SignupModal />
        </li>
      </ul>
    );
  }

  return (
    <nav className="nav-container">
      <ul className="static-nav">
        <li>
          <NavLink
            to="/"
            exact={true}
            className="home-button"
            id="nav-buttons"
            activeClassName="active"
          >
            <h3>Star Yelp</h3>
            <img src={logo} className="logo-image" alt="Site Logo"></img>
          </NavLink>
        </li>
      </ul>
      {sessionLinks}
    </nav>
  );
};

export default NavBar;
