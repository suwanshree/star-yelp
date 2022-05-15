import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as listingActions from "../../store/listing";
import * as reviewActions from "../../store/review";
import ReviewCard from "../ReviewCard";
import "./SingleListing.css";

function SingleListing() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { listingId } = useParams();

  const listing = useSelector((state) => state.listings[listingId]);
  const sessionUser = useSelector((state) => state.session.user);
  const reviewsObj = useSelector((state) => state.reviews);
  const reviews = Object.values(reviewsObj);

  useEffect(() => {
    if (!sessionUser) history.push("/");
  }, [sessionUser]);

  useEffect(() => {
    if (listingId) {
      dispatch(listingActions.loadSingleListing(listingId));
      dispatch(reviewActions.loadAllReviews(listingId));
    }
  }, [listingId]);

  console.log('REVIEWS OBJECT ------->', reviewsObj)
  console.log('REVIEWS ------->',reviews)

  return (
    <div className="page-container">
      <div className="single-listing">
        <div
          className="listing-background"
          style={{ backgroundImage: `url(${listing?.imageUrl})` }}
        >
          <div className="listing-box">
            <h1 id="listing-page-title">{listing?.title}</h1>
            <h2 id="listing-page-location">{listing?.location}</h2>
            <h3 id="listing-page-rating">Rating: {listing?.rating}</h3>
          </div>
        </div>
        <div className="listing-page-description">
          <h2 id="listing-page-location">Hours: Monnday - Sunday 24 / 7</h2>
          <h2 id="listing-page-description">{listing?.description}</h2>
        </div>
      </div>
      <h1 id="all-listings">All Reviews</h1>
      <div className="review-gallery">
        {reviews &&
          reviews
            .slice(0)
            .reverse()
            .map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
      </div>
    </div>
  );
}

export default SingleListing;
