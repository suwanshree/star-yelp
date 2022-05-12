// CONSTANTS

const LOAD_ALL_LISTINGS = "listing/loadAllListings";
const LOAD_SINGLE_LISTING = "listing/loadSingleListing";
const DELETE_LISTING = "listing/removeListing";

// ACTIONS

const addListing = (listing) => {
  return {
    type: LOAD_SINGLE_LISTING,
    payload: listing,
  };
};

const loadListings = (listings) => {
  return {
    type: LOAD_ALL_LISTINGS,
    payload: listings,
  };
};

const deleteListing = (id) => {
  return {
    type: DELETE_LISTING,
    payload: id,
  };
};

// THUNKS

export const newListing = (newListing) => async (dispatch) => {
  const { userId, title, location, description, imageUrl } = newListing;
  const response = await fetch("/api/listings/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, title, location, description, imageUrl }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addListing(data));
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) return data.errors;
  } else return ["An error occurred. Please try again."];
};

export const loadAllListings = () => async (dispatch) => {
  const res = await fetch(`/api/listings`);
  if (res.ok) {
    const listings = await res.json();
    dispatch(loadListings(listings));
  }
};

export const editListing = (editedListing) => async (dispatch) => {
  const id = parseInt(editedListing.id, 10);
  const res = await fetch(`/api/listings/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedListing),
  });

  if (res.ok) {
    const listing = await res.json();
    dispatch(addListing(listing));
  }
};

export const removeListing = (idString) => async (dispatch) => {
  const id = parseInt(idString, 10);
  const res = await fetch(`/api/listings/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(deleteListing(id));
  }
};

export const loadSingleListing = (id) => async (dispatch) => {
  const res = await fetch(`/api/listings/${id}`);

  if (res.ok) {
    const data = await res.json();
    if (data.errors) return data.errors;
    dispatch(addListing(data));
  } else return ["An error occurred. Please try again."];
};

// REDUCER

const initialState = {};
const listingsReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case LOAD_SINGLE_LISTING:
      newState[action.payload.id] = action.payload;
      return newState;
    case LOAD_ALL_LISTINGS:
      newState = action.payload;
      return newState;
    case DELETE_LISTING:
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default listingsReducer;
