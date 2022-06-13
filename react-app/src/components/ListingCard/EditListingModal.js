import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editListing } from "../../store/listing";

function EditListingModal({ hideModal, listing }) {
  const dispatch = useDispatch();
  const [id, setId] = useState(listing.id);
  const [title, setTitle] = useState(listing.title);
  const [location, setLocation] = useState(listing.location);
  const [description, setDescription] = useState(listing.description);
  const [image_url, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    let errors = [];
    const fileTypes = ["png", "jpg", "jpeg", "gif", "webp"];
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
    if (image_url?.size > 2000000) {
      errors.push("Image size must be less than 2 MB.");
    }
    if (image_url) {
      if (!fileTypes.includes(image_url?.name?.split(".").pop())) {
        errors.push(
          "Image not provided / file type not supported. Use: png, jpg, jpeg, gif, or webp"
        );
      }
    }
    setErrors(errors);
  }, [title, location, description, image_url]);

  const submitListingEdits = () => {
    setHasSubmitted(true);

    if (errors.length > 0) return;

    const editedListingData = {
      id,
      title,
      location,
      description,
      image_url,
    };

    setImageLoading(true);

    dispatch(editListing(editedListingData))
      .then(() => {
        setImage(null);
        setImageLoading(false);
        setErrors([]);
        setHasSubmitted(false);
        hideModal();
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    hideModal();
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
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
        <label className="listing-label">Upload Image *</label>
        <input
          type="file"
          className="file-input"
          name="file"
          onChange={updateImage}
        />
        <div id="edit-listing-buttons">
          <button id="listing-submit" type="submit">
            Update Listing
          </button>
          <button id="delete-button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
        {imageLoading && (
          <div className="listing-loading">
            <span className="wrapper">
              <i className="spinner"></i>
            </span>
            <h3>Loading...</h3>
          </div>
        )}
      </form>
    </div>
  );
}

export default EditListingModal;
