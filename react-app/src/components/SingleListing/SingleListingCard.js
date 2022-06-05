import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import EditListingModal from "../ListingCard/EditListingModal";
import DeleteListingModal from "../ListingCard/DeleteListingModal";
import AddReviewModal from "../AddReviewModal";
import ReactStars from "react-rating-stars-component";
import "./SingleListing.css";

function SingleListingCard({ listing, reviews, listingId }) {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [totalRatings, setTotalRatings] = useState(0);
  const [ratingText, setRatingText] = useState("Ratings");

  useEffect(() => {
    if (!sessionUser) history.push("/");
  }, [sessionUser]);

  useEffect(() => {
    if (reviews) {
      if (Array.isArray(reviews[0])) {
        setTotalRatings(0);
        setRatingText("Ratings");
      } else {
        setTotalRatings(reviews.length);
        if (reviews.length < 2) setRatingText("Rating");
        else setRatingText("Ratings");
      }
    }
  }, [listing, listingId, reviews]);

  let singleUserReview = true;
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].userId === sessionUser.id) singleUserReview = false;
  }

  let sessionLinks;
  if (listing && sessionUser.id === listing.userId) {
    sessionLinks = (
      <div className="listing-buttons">
        <button
          id="edit-button"
          onClick={(e) => setShowEditModal(!showEditModal)}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        {showEditModal && (
          <Modal onClose={() => setShowEditModal(false)}>
            <EditListingModal
              hideModal={() => setShowEditModal(false)}
              listing={listing}
            />
          </Modal>
        )}
        <button id="card-delete" onClick={(e) => setShowDeleteModal(true)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
        {showDeleteModal && (
          <Modal onClose={() => setShowDeleteModal(false)}>
            <DeleteListingModal
              hideModal={() => setShowDeleteModal(false)}
              listing={listing}
            />
          </Modal>
        )}
      </div>
    );
  } else if (singleUserReview === true) {
    sessionLinks = <AddReviewModal listingId={listingId} />;
  }

  const ratingStars = {
    size: 35,
    count: 5,
    isHalf: true,
    value: listing?.rating / 2,
    color: "gray",
    edit: false,
    activeColor: "gold",
  };

  return (
    <div className="single-listing">
      <div className="inner-listing">
        <div
          className="listing-background"
          style={{ backgroundImage: `url(${listing?.imageUrl})` }}
        >
          <div className="listing-box">
            <h1 id="listing-page-title">{listing?.title}</h1>
            <h2 id="listing-page-location">{listing?.location}</h2>
            <div className="ratings-div">
              <ReactStars {...ratingStars} />
              <h2>
                ({totalRatings} {ratingText})
              </h2>
            </div>
          </div>
        </div>
        <div className="listing-page-description">
          <h2 id="listing-page-location">Hours: Monnday - Sunday 24 / 7</h2>
          <h2 id="listing-page-description">{listing?.description}</h2>
        </div>
      </div>
      <div className="session-div">{sessionLinks}</div>
    </div>
  );
}

export default SingleListingCard;
