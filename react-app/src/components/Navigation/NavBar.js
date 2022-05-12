import React from "react";
import { NavLink } from "react-router-dom";
import LoginModal from "../LoginModal";
import SignupModal from "../SignupModal";
import DemoButton from "../auth/DemoButton";
import LogoutButton from "../auth/LogoutButton";
import AddListingModal from "../AddListingModal";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <ul className="logged-in-nav">
        <li className="about-button">About</li>
        <li className="review-button">Review</li>
        <li className="add-listing-button">
          <AddListingModal />
        </li>
        <li className="listings-button">
          <NavLink to="/listings" exact={true} className="listings">
            Listings
          </NavLink>
        </li>
        <li className="profile-button">
          <NavLink to="/users" exact={true} activeClassName="active">
            Profile
          </NavLink>
        </li>
        <li className="logout-button">
          <LogoutButton />
        </li>
      </ul>
    );
  } else {
    sessionLinks = (
      <ul className="logged-out-nav">
        <li className="about-button">About</li>
        <li className="demo-button">
          <DemoButton />
        </li>
        <li className="login-button">
          <LoginModal />
        </li>
        <li className="signup-button">
          <SignupModal />
        </li>
      </ul>
    );
  }

  return (
    <nav className="nav-container">
      <ul className="static-nav">
        <li className="home-button">
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
      </ul>
      {sessionLinks}
    </nav>
  );
};

export default NavBar;
