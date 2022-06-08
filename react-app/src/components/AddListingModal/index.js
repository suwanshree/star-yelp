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
  const [image, setImage] = useState(null);
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
    // if (!image?.length) errors.push("Image must be provided.");
    if (image?.size > 2000000) {
      errors.push("Image size must be less than 2 megabytes");
    }
    if (!fileTypes.includes(image?.name?.split(".").pop())) {
      errors.push("Image file type is not supported");
    }
    setErrors(errors);
  }, [title, location, description, image]);

  const submitListing = () => {
    setHasSubmitted(true);

    if (image) console.log(image);

    if (errors.length > 0) return;

    const newListingData = {
      userId,
      title,
      location,
      description,
      image,
    };

    //   if (errors.length === 0) {
    //     setImageLoading(true);
    //     await dispatch(listingActions.newListing(newListingData));
    //     history.push("/listings");
    //     //   setAbout("");
    //     //   setTitle("");
    //     //   setVideo(null);
    //     setImageLoading(false);
    //     //   setHasSubmitted(false);
    //     //   setShowErrors(false);
    //   }
    // };
    setImageLoading(true);

    dispatch(listingActions.newListing(newListingData))
      .then(() => {
        setTitle("");
        setLocation("");
        setDescription("");
        setImage(null);
        setImageLoading(false);
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

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
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
              <label className="listing-label">Image *</label>
              <input type="file" name="file" onChange={updateImage} />
              <button id="listing-submit" type="submit">
                Submit Listing
              </button>
              {imageLoading && <p>Loading...</p>}
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default AddListingModal;
