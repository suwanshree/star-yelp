import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as listingActions from "../../store/listing";
import * as reviewActions from "../../store/review";
import ReviewCard from "../ReviewCard";
import SingleListingCard from "./SingleListingCard";
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

  return (
    <div className="page-container">
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
      <SingleListingCard
        key={listing?.id}
        listing={listing}
        reviews={reviews}
        listingId={listingId}
      />
      <div className="review-gallery">
        <h1 id="all-listings">All Reviews</h1>
        {reviews &&
          reviews
            .slice(0)
            .reverse()
            .map((review) => <ReviewCard key={review.id} review={review} />)}
      </div>
    </div>
  );
}

export default SingleListing;
