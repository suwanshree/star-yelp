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
    if (title.length < 3)
      errors.push("Title field needs minimum 3 characters.");
    if (title.length > 50)
      errors.push("Title field cannot exceed 50 characters.");
    if (!location.length) errors.push("Location field cannot be empty.");
    if (location.length < 3)
      errors.push("Location field needs minimum 3 characters.");
      if (location.length > 100)
      errors.push("Location field cannot exceed 100 characters.");
    if (!description.length) errors.push("Description field cannot be empty.");
    if (description.length < 20)
      errors.push("Description field needs minimum 20 characters.");
    if (description.length > 400)
      errors.push("Description field cannot exceed 400 characters.");
    if (!imageUrl.length) errors.push("Image URL must be provided.");
    if (!imageUrl.match(url)) errors.push("INVALID Image URL, please retry.");
    if (imageUrl.match(url)) {
      if (
        !(
          imageUrl.endsWith(".png") ||
          imageUrl.endsWith(".jpg") ||
          imageUrl.endsWith(".jpeg") ||
          imageUrl.endsWith(".gif") ||
          imageUrl.endsWith(".webp")
        )
      ) {
        errors.push(
          "INVALID Image URL format, accepted links end with: .png / .jpg / .jpeg / .webp or .gif"
        );
      }
    }
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
      .then(setErrors([]))
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
      <h2>Update Listing Details</h2>
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
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="listing-input-textarea"
          placeholder={"Listing Description"}
          value={description}
          rows={5}
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
          <button id="delete-button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditListingModal;
