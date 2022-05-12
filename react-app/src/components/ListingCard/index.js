import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import EditListingModal from "./EditListingModal";

function ListingCard({ listing }) {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [showEditModal, setShowEditModal] = useState(false)


  useEffect(() => {
    if (!sessionUser) history.push("/");
  }, [sessionUser]);

  console.log(listing);

  return (
    <div className="listing-container">
      <div className="listing-image">
        <img
          id="listing-image"
          src={listing?.imageUrl}
          alt={`${listing?.title} alt`}
        />
      </div>
      <div className="listing-details">
        <h2 id="listing-title">{listing.title}</h2>
        <h3 id="listing-location">{listing.location}</h3>
        <h3 id="listing-rating">{listing.rating}</h3>
        <p id="listing-description">{listing.description}</p>
      </div>
      <div className="listing-buttons">
        <button
          className="button5"
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
      </div>
    </div>
  );
}

export default ListingCard;
