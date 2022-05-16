import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import EditReviewModal from "./EditReviewModal";
import DeleteReviewModal from "./DeleteReviewModal";

function ReviewCard({ review }) {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    if (!sessionUser) history.push("/");
  }, [sessionUser]);

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
        <button id="delete-button" onClick={(e) => setShowDeleteModal(true)}>
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

  return (
    <div className="listing-container">
      <div className="listing-details">
        <h2 id="listing-title">{review?.title}</h2>
        <h3 id="listing-rating">{review.rating ? `Rating: ${review?.rating}`: "Be the First to leave a review!"}</h3>
        <h3 id="listing-location">{review?.text}</h3>
      </div>
      {sessionLinks}
    </div>
  );
}

export default ReviewCard;
