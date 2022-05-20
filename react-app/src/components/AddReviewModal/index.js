import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as reviewActions from "../../store/review";

function AddReviewModal({ listingId }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [userId, setUserId] = useState(sessionUser?.id);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    let errors = [];
    if (!title.length) errors.push("Title field cannot be empty.");
    if (title.length < 3)
      errors.push("Title field needs minimum 3 characters.");
    if (title.length > 50)
      errors.push("Title field cannot exceed 50 characters.");
    if (!text.length) errors.push("Review field cannot be empty.");
    if (text.length < 20)
      errors.push("Review field needs minimum 20 characters.");
    if (text.length > 1200)
      errors.push("Review field cannot exceed 1200 characters.");
    if (!rating.length) errors.push("Please select a rating value of 1 - 5.");
    if (rating.length > 1)
      errors.push("Please select a rating value of 1 - 5.");

    setErrors(errors);
  }, [title, text, rating]);

  const submitReview = () => {
    setHasSubmitted(true);
    if (errors.length > 0) return;

    const newReviewData = {};
    setUserId(sessionUser.id);
    newReviewData.userId = userId;
    newReviewData.listingId = listingId;
    newReviewData.title = title;
    newReviewData.text = text;
    newReviewData.rating = rating;

    dispatch(reviewActions.newReview(newReviewData))
      .then(() => {
        setTitle("");
        setText("");
        setRating("");
        setErrors([]);
        setHasSubmitted(false);
        setShowModal(false);
        history.push(`/listings/${listingId}`);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <>
      <button className="add-listing-button" onClick={() => setShowModal(true)}>
        Add Review
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="listing-form-container">
            <h2>New Review Details</h2>
            <form
              className="listing-form"
              onSubmit={(e) => {
                e.preventDefault();
                submitReview();
              }}
            >
              <ul className="listing-form-errors">
                {hasSubmitted &&
                  errors.map((error, idx) => <li key={idx}>{error}</li>)}
              </ul>
              <label className="listing-label">Title *</label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="listing-input"
                placeholder="Enter a Title"
                value={title}
              />
              <label className="listing-label">Rating *</label>
              <select
                className="select-label"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              >
                <option>Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <label className="listing-label">Review *</label>
              <textarea
                onChange={(e) => setText(e.target.value)}
                className="listing-input-textarea"
                placeholder="Review Text..."
                value={text}
                rows={5}
              />
              <button id="listing-submit" type="submit">
                Submit Review
              </button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default AddReviewModal;
