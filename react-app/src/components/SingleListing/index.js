import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as listingActions from "../../store/listing";
import * as reviewActions from "../../store/review";
import { Modal } from "../../context/Modal";
import EditListingModal from "../ListingCard/EditListingModal";
import DeleteListingModal from "../ListingCard/DeleteListingModal";
import AddReviewModal from "../AddReviewModal";
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

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [newReviewId, setNewReviewId] = useState("");

  useEffect(() => {
    if (!sessionUser) history.push("/");
  }, [sessionUser]);

  useEffect(() => {
    if (listingId) {
      dispatch(listingActions.loadSingleListing(listingId));
      dispatch(reviewActions.loadAllReviews(listingId));
    }
  }, [listingId, newReviewId]);

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

  return (
    <div className="page-container">
      <div className="single-listing">
        <div className="inner-listing">
          <div
            className="listing-background"
            style={{ backgroundImage: `url(${listing?.imageUrl})` }}
          >
            <div className="listing-box">
              <h1 id="listing-page-title">{listing?.title}</h1>
              <h2 id="listing-page-location">{listing?.location}</h2>
              <h3 id="listing-page-rating">Rating: {(listing?.rating)/2}/5</h3>
            </div>
          </div>
          <div className="listing-page-description">
            <h2 id="listing-page-location">Hours: Monnday - Sunday 24 / 7</h2>
            <h2 id="listing-page-description">{listing?.description}</h2>
          </div>
        </div>
        <div className="session-div">{sessionLinks}</div>
      </div>
      <div className="review-gallery">
        <h1 id="all-listings">All Reviews</h1>
        {reviews &&
          reviews
            .slice(0)
            .reverse()
            .map((review) => <ReviewCard key={review.id} review={review} setNewReviewId={setNewReviewId}/>)}
      </div>
    </div>
  );
}

export default SingleListing;
