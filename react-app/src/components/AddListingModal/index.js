import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as listingActions from "../../store/listing";

function AddListingModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [userId, setUserId] = useState(sessionUser?.id);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const url =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  useEffect(() => {
    let errors = [];
    if (!title.length) errors.push("Title field cannot be empty.");
    if (!location.length) errors.push("Location field cannot be empty.");
    if (!description.length) errors.push("Description field cannot be empty.");
    if (!imageUrl.length) errors.push("Image URL must be provided.");
    if (!imageUrl.match(url)) errors.push("INVALID Image URL, please retry.");

    setErrors(errors);
  }, [title, location, description, imageUrl]);

  const submitListing = () => {
    setHasSubmitted(true);
    if (errors.length > 0) return;

    const newListingData = {};
    setUserId(sessionUser.id);
    newListingData.userId = userId;
    newListingData.title = title;
    newListingData.location = location;
    newListingData.description = description;
    newListingData.imageUrl = imageUrl;

    dispatch(listingActions.newListing(newListingData))
      .then(() => {
        setTitle("");
        setLocation("");
        setDescription("");
        setImageUrl("");
        setErrors([]);
        setHasSubmitted(false);
        setShowModal(false);
        history.push("/listings");
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <>
      <button className="add-listing-button" onClick={() => setShowModal(true)}>
        + Listing
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="listing-form-container">
            <h2>New Listing Details</h2>
            <form
              className="listing-form"
              onSubmit={(e) => {
                e.preventDefault();
                submitListing();
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
              <label className="listing-label">Location *</label>
              <input
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                className="listing-input"
                placeholder="Enter a Location"
                value={location}
              />
              <label className="listing-label">Description *</label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                className="listing-input-textarea"
                placeholder="Describe the listing..."
                value={description}
                rows={5}
              />
              <label className="listing-label">Image URL *</label>
              <input
                onChange={(e) => setImageUrl(e.target.value)}
                type="text"
                className="listing-input"
                placeholder="Valid Image Url"
                value={imageUrl}
              />
              <button id="listing-submit" type="submit">
                Submit Listing
              </button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default AddListingModal;
