import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editReview } from "../../store/review";
import ReactStars from "react-rating-stars-component";

function EditReviewModal({ hideModal, review }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(review.title);
  const [text, setText] = useState(review.text);
  const [rating, setRating] = useState(review.rating);
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
    if (rating.length > 1)
      errors.push("Please select a rating value of 1 - 5.");

    setErrors(errors);
  }, [title, text, rating]);

  const submitReviewEdits = () => {
    setHasSubmitted(true);
    if (errors.length > 0) return;
    const editedReviewData = {};
    editedReviewData.id = review.id;
    editedReviewData.title = title;
    editedReviewData.text = text;
    editedReviewData.rating = rating;

    dispatch(editReview(editedReviewData))
      .then(setHasSubmitted(false))
      .then(setErrors([]))
      .then(() => hideModal())
      .then(window.location.reload())
      .catch(async (res) => {
        const data = await res;
        if (data && data.errors) setErrors(data.errors);
      });
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    hideModal();
  };

  const ratingStars = {
    size: 20,
    count: 5,
    isHalf: false,
    value: rating,
    color: "gray",
    edit: true,
    activeColor: "cyan",
    onChange: (e) => setRating(e),
  }

  return (
    <div className="listing-form-container">
      <h2>Update Review Details</h2>
      <form
        className="listing-form"
        onSubmit={(e) => {
          e.preventDefault();
          submitReviewEdits();
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
        <ReactStars {...ratingStars} />
        <label className="listing-label">Review *</label>
        <textarea
          onChange={(e) => setText(e.target.value)}
          className="listing-input-textarea"
          placeholder="Review Text..."
          value={text}
          rows={5}
        />
        <button id="listing-submit" type="submit">
          Update Review
        </button>
        <button id="delete-button" onClick={handleCancelClick}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditReviewModal;
