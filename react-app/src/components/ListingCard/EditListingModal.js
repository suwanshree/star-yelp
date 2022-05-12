import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editListing } from "../../store/listing";

function EditListingModal({ hideModal, listing }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(listing.title);
  const [location, setLocation] = useState(listing.location);
  const [description, setDescription] = useState(listing.description);
  const [imageUrl, setImageUrl] = useState(listing.imageUrl);
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

  const submitListingEdits = () => {
    setHasSubmitted(true);
    if (errors.length > 0) return;

    const editedListingData = listing;
    editedListingData.title = title;
    editedListingData.location = location;
    editedListingData.description = description;
    editedListingData.imageUrl = imageUrl;
    dispatch(editListing(editedListingData))
      .then(setHasSubmitted(false))
      .then(() => hideModal())
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    hideModal();
  };

  return (
    <div className="listing-form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitListingEdits();
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
          placeholder={"Listing Title"}
          value={title}
        />
        <label className="listing-label">Location *</label>
        <input
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          className="listing-input"
          placeholder={"Listing Location"}
          value={location}
        />
        <label className="listing-label">Description *</label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="listing-input-description"
          placeholder={"Listing Description"}
          value={description}
        />
        <label className="listing-label">Image URL *</label>
        <input
          onChange={(e) => setImageUrl(e.target.value)}
          type="text"
          className="listing-input"
          placeholder={"Listing Image URL"}
          value={imageUrl}
        />
        <div id="edit-listing-buttons">
          <button id="listing-submit" type="submit">
            Update Listing
          </button>
          <button id="listing-submit" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditListingModal;
