import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as listingActions from "../../store/listing";
import BackToTop from "../BackToTop";
import ListingCard from "../ListingCard";
import { SearchContext } from "../../context/Search";

function SearchResults() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const listingsObj = useSelector((state) => state.listings);
  const { currentSearch, setCurrentSearch } = useContext(SearchContext);
  const listings = Object.values(listingsObj);
  const filteredListings = listings.filter((listing) =>
    listing.title.toLowerCase().includes(currentSearch.toLowerCase())
  );
  const [title] = useState(`Star Yelp | Search`);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    if (!sessionUser) history.push("/");
    if (sessionUser) dispatch(listingActions.loadAllListings());
  }, [sessionUser]);

  const onSearch = async (e) => {
    e.preventDefault();
    history.push("/results");
  };

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
      </div>
      <h1 id="all-listings">Search Results</h1>
      <form className="search-bar" onSubmit={onSearch}>
        <input
          onChange={(e) => setCurrentSearch(e.target.value)}
          type="text"
          className="search-input"
          placeholder="Search Listings by Title..."
          value={currentSearch}
        />
        <button className="search-submit" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <div className="listing-gallery">
        {filteredListings &&
          filteredListings
            .slice(0)
            .reverse()
            .map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
      </div>
      <h2 id="listing-title">No more search results...</h2>
      <BackToTop />
    </div>
  );
}
export default SearchResults;
