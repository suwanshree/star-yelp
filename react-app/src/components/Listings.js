import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as listingActions from "../store/listing";
import BackToTop from "./BackToTop";
import ListingCard from "./ListingCard";
import { SearchContext } from "../context/Search";
import "./Listings.css";

function Listings() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const listingsObj = useSelector((state) => state.listings);
  const { setCurrentSearch } = useContext(SearchContext);
  const [allChecked, setAllChecked] = useState(true);
  const [restChecked, setRestChecked] = useState(false);
  const [barChecked, setBarChecked] = useState(false);
  const [equipChecked, setEquipChecked] = useState(false);
  const [retailChecked, setRetailChecked] = useState(false);
  const [medicalChecked, setMedicalChecked] = useState(false);
  const [miscChecked, setMiscChecked] = useState(false);
  const [numState, setNumState] = useState(0);
  const listings = Object.values(listingsObj);
  const [title, setTitle] = useState("Star Yelp | Listings");
  const filteredListings = listings.filter((listing) => {
    if (numState === 0) return listings;
    return listing.category === numState;
  });

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

  const handleAllChange = () => {
    setAllChecked(true);
    setRestChecked(false);
    setBarChecked(false);
    setEquipChecked(false);
    setRetailChecked(false);
    setMedicalChecked(false);
    setMiscChecked(false);
    setNumState(0);
  };

  const handleRestChange = (boolean) => {
    if (boolean === true) {
      setRestChecked(false);
      setAllChecked(true);
      setNumState(0);
    } else if (boolean === false) {
      setRestChecked(true);
      setAllChecked(false);
      setBarChecked(false);
      setEquipChecked(false);
      setRetailChecked(false);
      setMedicalChecked(false);
      setMiscChecked(false);
      setNumState(1);
    }
  };

  const handleBarChange = (boolean) => {
    if (boolean === true) {
      setBarChecked(false);
      setAllChecked(true);
      setNumState(0);
    } else if (boolean === false) {
      setBarChecked(true);
      setAllChecked(false);
      setEquipChecked(false);
      setRetailChecked(false);
      setMedicalChecked(false);
      setMiscChecked(false);
      setRestChecked(false);
      setNumState(2);
    }
  };

  const handleEquipChange = (boolean) => {
    if (boolean === true) {
      setEquipChecked(false);
      setAllChecked(true);
      setNumState(0);
    } else if (boolean === false) {
      setEquipChecked(true);
      setAllChecked(false);
      setRetailChecked(false);
      setMedicalChecked(false);
      setMiscChecked(false);
      setRestChecked(false);
      setBarChecked(false);
      setNumState(3);
    }
  };

  const handleRetailChange = (boolean) => {
    if (boolean === true) {
      setRetailChecked(false);
      setAllChecked(true);
      setNumState(0);
    } else if (boolean === false) {
      setRetailChecked(true);
      setAllChecked(false);
      setMedicalChecked(false);
      setMiscChecked(false);
      setRestChecked(false);
      setBarChecked(false);
      setEquipChecked(false);
      setNumState(4);
    }
  };

  const handleMedicalChange = (boolean) => {
    if (boolean === true) {
      setMedicalChecked(false);
      setAllChecked(true);
      setNumState(0);
    } else if (boolean === false) {
      setMedicalChecked(true);
      setAllChecked(false);
      setRetailChecked(false);
      setMiscChecked(false);
      setRestChecked(false);
      setBarChecked(false);
      setEquipChecked(false);
      setNumState(5);
    }
  };

  const handleMiscChange = (boolean) => {
    if (boolean === true) {
      setMiscChecked(false);
      setAllChecked(true);
      setNumState(0);
    } else if (boolean === false) {
      setMiscChecked(true);
      setAllChecked(false);
      setMedicalChecked(false);
      setRetailChecked(false);
      setRestChecked(false);
      setBarChecked(false);
      setEquipChecked(false);
      setNumState(6);
    }
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
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
      </div>
      <h1 id="all-listings">Listings</h1>
      <form className="search-bar" onSubmit={onSearch}>
        <input
          onChange={(e) => setCurrentSearch(e.target.value)}
          type="text"
          className="search-input"
          placeholder="Search Listings by Title..."
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
      <h2 id="listing-title">End of Listings</h2>
      <div className="menu">
        <i className="title fa-solid fa-chevron-right"></i>
        <ul className="nav">
          <li className="top">CATEGORIES</li>
          <li className="check-box">
            <input
              type="checkbox"
              checked={allChecked}
              onChange={() => handleAllChange()}
            />
            <label>All</label>
          </li>
          <li className="check-box">
            <input
              type="checkbox"
              checked={restChecked}
              onChange={() => handleRestChange(restChecked)}
            />
            <label>Restaurants</label>
          </li>
          <li className="check-box">
            <input
              type="checkbox"
              checked={barChecked}
              onChange={() => handleBarChange(barChecked)}
            />
            <label>Bars</label>
          </li>
          <li className="check-box">
            <input
              type="checkbox"
              checked={equipChecked}
              onChange={() => handleEquipChange(equipChecked)}
            />
            <label>Equipment</label>
          </li>
          <li className="check-box">
            <input
              type="checkbox"
              checked={retailChecked}
              onChange={() => handleRetailChange(retailChecked)}
            />
            <label>Retail</label>
          </li>
          <li className="check-box">
            <input
              type="checkbox"
              checked={medicalChecked}
              onChange={() => handleMedicalChange(medicalChecked)}
            />
            <label>Medical</label>
          </li>
          <li className="check-box">
            <input
              type="checkbox"
              checked={miscChecked}
              onChange={() => handleMiscChange(miscChecked)}
            />
            <label>Misc.</label>
          </li>
        </ul>
      </div>
      <BackToTop />
    </div>
  );
}
export default Listings;
