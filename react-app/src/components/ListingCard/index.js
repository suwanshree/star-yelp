import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { Modal } from "../../context/Modal";
import EditListingModal from "./EditListingModal";
import DeleteListingModal from "./DeleteListingModal";
import ReactStars from "react-rating-stars-component";

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
  }

  const ratingStars = {
    size: 25,
    count: 5,
    isHalf: true,
    value: listing?.rating / 2,
    color: "gray",
    edit: false,
    activeColor: "cyan",
  };

  let category;
  switch (listing?.category) {
    case 1:
      category = "Restaurant";
      break;
    case 2:
      category = "Bar";
      break;
    case 3:
      category = "Equipment";
      break;
    case 4:
      category = "Retail";
      break;
    case 5:
      category = "Medical";
      break;
    case 6:
      category = "Misc.";
      break;
    default:
      category = "None";
      break;
  }

  return (
    <div className="listing-container">
      <div className="listing-image">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <NavLink to={`/listings/${listing?.id}`}>
          <img
            id="listing-image"
            src={listing?.imageUrl}
            alt={`${listing?.title} alt`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src =
                "https://res.cloudinary.com/dn0ocfiva/image/upload/v1653045697/star-yelp/brokenimage_rtafkm.png";
            }}
          />
        </NavLink>
      </div>
      <div className="listing-details">
        <div className="title-bar">
          <h2 id="listing-title">{listing?.title}</h2>
          <p id="listing-category">{category}</p>
        </div>
        <h3 id="listing-location">{listing?.location}</h3>
        <ReactStars {...ratingStars} />
        <p id="listing-description">{listing?.description}</p>
      </div>
      {sessionLinks}
    </div>
  );
}

export default ListingCard;
