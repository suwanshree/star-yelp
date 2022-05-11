import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as listingActions from "../store/listing";

function Listings() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const listingsObj = useSelector(state => state.listings)
    const listings = Object.values(listingsObj)

    useEffect(() => {
        if (!sessionUser) history.push('/')
        if (sessionUser) dispatch(listingActions.loadAllListings())
    }, [sessionUser])

    return (
        <div className="page-container">
            <h1 id="all-listings">All Listings</h1>
            <div>
                {listings && listings.map(listing =>
                    <h2 key={listing.id} id="listing-title">{listing.title}</h2>
                )}
            </div>
        </div>
    );
}
export default Listings;