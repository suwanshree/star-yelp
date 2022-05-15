import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as listingActions from "../../store/listing";

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
    <div className="single-listing">
      <div className="listing-top">
        <div
          style={{ backgroundImage: `url(${listing?.imageUrl})` }}
          className="listing-background"
        >
          <div className="listing-box">
            <h1 id="listing-title">{listing?.title}</h1>
            <h2 id="listing-location">{listing?.location}</h2>
            <h3 id="listing-rating">{listing?.rating}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleListing;
