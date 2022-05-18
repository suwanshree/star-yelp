import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import EditReviewModal from "./EditReviewModal";
import DeleteReviewModal from "./DeleteReviewModal";
import ReactStars from "react-rating-stars-component";

function ReviewCard({ review, setNewReviewId }) {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reviewUser, setReviewUser] = useState({});
  const userId = review.userId;

  useEffect(() => {
    if (!sessionUser) history.push("/");
    setNewReviewId(review.id);
    // return; // Warning for react state component needs return
  }, [sessionUser, setNewReviewId]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const reviewUser = await response.json();
      setReviewUser(reviewUser);
    })();
  }, [userId]);

  let sessionLinks;
  if (sessionUser.id === review.userId) {
    sessionLinks = (
      <div className="listing-buttons">
        <button
          id="edit-button"
          onClick={(e) => setShowEditModal(!showEditModal)}
        >
          Edit
        </button>
        {showEditModal && (
          <Modal onClose={() => setShowEditModal(false)}>
            <EditReviewModal
              hideModal={() => setShowEditModal(false)}
              review={review}
            />
          </Modal>
        )}
        <button id="card-delete" onClick={(e) => setShowDeleteModal(true)}>
          Delete
        </button>
        {showDeleteModal && (
          <Modal onClose={() => setShowDeleteModal(false)}>
            <DeleteReviewModal
              hideModal={() => setShowDeleteModal(false)}
              review={review}
            />
          </Modal>
        )}
      </div>
    );
  }

  const ratingStars = {
    size: 20,
    count: 5,
    isHalf: false,
    value: (review?.rating),
    color: "gray",
    edit: false,
    activeColor: "cyan",
  };

  return (
    <div className="listing-container">
      <div className="review-details">
        <h2 id="listing-title">{review?.title}</h2>
        <h3 id="listing-rating">
          {review.rating
            ? <ReactStars {...ratingStars} />
            : "Be the First to leave a review!"}
        </h3>
        <h3 id="listing-rating">{review?.text}</h3>
      </div>
      <div className="review-actions">
        <h4 id="listing-rating">
          {review.rating ? `Review by: ${reviewUser.username}` : ""}
        </h4>
        {sessionLinks}
      </div>
    </div>
  );
}

export default ReviewCard;
