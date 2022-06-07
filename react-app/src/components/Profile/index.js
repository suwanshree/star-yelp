import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as listingActions from "../../store/listing";
import BackToTop from "../BackToTop";
import ListingCard from "../ListingCard";

function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const listingsObj = useSelector((state) => state.listings);
  const listings = Object.values(listingsObj);
  const filteredListings = listings.filter(
    (listing) => listing.userId === sessionUser.id
  );

  useEffect(() => {
    if (!sessionUser) history.push("/");
    if (sessionUser) dispatch(listingActions.loadAllListings());
  }, [sessionUser]);

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
      <h1 id="all-listings">{sessionUser.username}'s Listings</h1>
      <div className="listing-gallery">
        {filteredListings &&
          filteredListings
            .slice(0)
            .reverse()
            .map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
      </div>
      <h2 id="listing-title">End of your listings</h2>
      <BackToTop />
    </div>
  );
}
export default Profile;
