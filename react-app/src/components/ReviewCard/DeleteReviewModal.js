import { useDispatch } from "react-redux";
import { removeReview } from "../../store/review";

function DeleteReviewModal({ hideModal, review }) {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(removeReview(review.id));
    hideModal();
  };
  const handleCancelClick = (e) => {
    e.preventDefault();
    hideModal();
  };

  return (
    <div className="delete-listing-modal">
      <form className="delete-listing-form" onSubmit={handleSubmit}>
        <h3>
          Are you sure you want to delete your "
          <span id="delete-listing-title">{review.title}</span>" Review?
        </h3>
        <div id="delete-listing-buttons">
          <button id="delete-button" type="submit">
            Confirm Delete
          </button>
          <button id="cancel-button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteReviewModal;
