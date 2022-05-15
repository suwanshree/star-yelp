import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function ListingCard({ review }) {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    if (!sessionUser) history.push("/");
  }, [sessionUser]);

  return (
    <div className="listing-container">
      <div className="listing-details">
        <h2 id="listing-title">{review?.title}</h2>
        <h3 id="listing-rating">Rating: {review?.rating}</h3>
        <h3 id="listing-location">{review?.text}</h3>
      </div>
    </div>
  );
}

export default ListingCard;
