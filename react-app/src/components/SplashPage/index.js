import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import browse from "../../images/browse.jpg";
import filter from "../../images/filter.jpg";
import list from "../../images/list.jpg";
import review from "../../images/review.jpg";
import reviews from "../../images/reviews.jpg";

function SplashPage() {
  const [title] = useState("Star Yelp | Home");

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  return (
    <>
      <div className="night">
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
      </div>
      <div className="info">
        <h1>Welcome to Star Yelp</h1>
        <h2>Your guide to the best businesses</h2>
        <h2>the 'verse has to offer</h2>
      </div>
      <div className="night">
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
      </div>
      <div id="slideshow">
        <div className="slide-wrapper">
          <div className="slide">
            <img src={browse} alt="Browse Listings" className="card-image" />
          </div>
          <div className="slide">
            <img src={filter} alt="Filter Listings" className="card-image" />
          </div>
          <div className="slide">
            <img src={list} alt="Add your Listing" className="card-image" />
          </div>
          <div className="slide">
            <img src={reviews} alt="View Reviews" className="card-image" />
          </div>
          <div className="slide">
            <img src={review} alt="Add Review" className="card-image" />
          </div>
        </div>
      </div>
      <div className="info2">
        <h2>Login or Sign Up to access the Full site</h2>
      </div>
      <div className="night">
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
      </div>
      <Footer />
    </>
  );
}

export default SplashPage;
