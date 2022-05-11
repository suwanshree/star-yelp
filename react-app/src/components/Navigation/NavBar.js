import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginModal from '../LoginModal';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector(state => state.session.user);

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <ul className="logged-in-nav">
        <li className="about-button">
          About
        </li>
        <li className="review-button">
          Review
        </li>
        <li className="add-listing-button">
          + Listing
        </li>
        <li className="listings-button">
          <NavLink to="/" exact={true} className="trips">
            Listings
          </NavLink>
        </li>
        <li className="profile-button">
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
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
        <li className="about-button">
          About
        </li>
        <li className="demo-button">
          Demo
        </li>
        <li className="login-button">
          <LoginModal />
        </li>
        <li className="signup-button">
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="nav-container">
      <ul className="static-nav">
        <li className="home-button">
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
      </ul>
      {sessionLinks}
    </nav>
  );
}

export default NavBar;
