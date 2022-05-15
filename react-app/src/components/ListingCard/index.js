import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { Modal } from "../../context/Modal";
import EditListingModal from "./EditListingModal";
import DeleteListingModal from "./DeleteListingModal";

function ListingCard({ listing }) {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    if (!sessionUser) history.push("/");
  }, [sessionUser]);

  let sessionLinks;
  if (sessionUser.id === listing.userId) {
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
            <EditListingModal
              hideModal={() => setShowEditModal(false)}
              listing={listing}
            />
          </Modal>
        )}
        <button id="delete-button" onClick={(e) => setShowDeleteModal(true)}>
          Delete
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
  }

  return (
    <div className="listing-container">
      <div className="listing-image">
        <NavLink to={`/listings/${listing?.id}`}>
          <img
            id="listing-image"
            src={listing?.imageUrl}
            alt={`${listing?.title} alt`}
          />
        </NavLink>
      </div>
      <div className="listing-details">
        <h2 id="listing-title">{listing?.title}</h2>
        <h3 id="listing-location">{listing?.location}</h3>
        <h3 id="listing-rating">{listing?.rating}</h3>
        <p id="listing-description">{listing?.description}</p>
      </div>
      {sessionLinks}
    </div>
  );
}

export default ListingCard;
