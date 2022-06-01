import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as listingActions from "../store/listing";
import BackToTop from "./BackToTop";
import ListingCard from "./ListingCard";
import "./Listings.css";


function Listings() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const listingsObj = useSelector((state) => state.listings);
  const [searchText, setSearchText] = useState(" ");
  const listings = Object.values(listingsObj);

  useEffect(() => {
    if (!sessionUser) history.push("/");
    if (sessionUser) dispatch(listingActions.loadAllListings());
  }, [sessionUser]);

  return (
    <div className="page-container">
      <h1 id="all-listings">All Listings</h1>
      <div className="search-bar">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="search-input"
          placeholder="Search Listings..."
          value={searchText}
        />
        <button className="search-submit" type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="listing-gallery">
        {listings &&
          listings
            .slice(0)
            .reverse()
            .map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
      </div>
      <BackToTop />
    </div>
  );
}
export default Listings;
