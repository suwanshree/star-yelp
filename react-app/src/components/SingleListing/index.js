import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as listingActions from "../../store/listing";
import "./SingleListing.css";

function SingleListing() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { listingId } = useParams();

  const listing = useSelector((state) => state.listings[listingId]);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    if (!sessionUser) history.push("/");
  }, [sessionUser]);

  useEffect(() => {
    if (listingId) {
      dispatch(listingActions.loadSingleListing(listingId));
    }
  }, [listingId]);

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
    </div>
  );
}

export default SingleListing;
