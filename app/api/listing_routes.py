from flask import Blueprint, request
from ..forms import NewListing, EditListing
from ..models import db, Listing, Review
from datetime import date
from app.s3_helpers import (upload_file_to_s3, allowed_file, get_unique_filename)


listing_routes = Blueprint('listings', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@listing_routes.route('/', methods=['POST'])
def listings(): 
    form = NewListing()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_listing = Listing(
            user_id=form.data["userId"],
            title=form.data["title"],
            location=form.data["location"],
            description=form.data["description"],
            image_url=form.data["imageUrl"],
        )
        db.session.add(new_listing)
        db.session.commit()
        return new_listing.to_dict
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@listing_routes.route('/')
def get_listings():
    all_listings = {}
    listings = Listing.query.all()
    for listing in listings:
        all_listings[listing.id] = listing.to_dict
    return all_listings

@listing_routes.route("/<int:id>", methods=['PUT'])
def edit_listing(id):
    form = EditListing()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        listing = Listing.query.get(id)
        listing.title= form.data["title"]
        listing.location = form.data["location"]
        listing.description = form.data["description"]
        listing.image_url = form.data["imageUrl"]
        current_time = date.today()
        listing.updated_at = current_time

        db.session.add(listing)
        db.session.commit()
        return listing.to_dict

@listing_routes.route("/<int:id>", methods=['DELETE'])
def delete_listing(id):
    listing = Listing.query.get(id)
    db.session.delete(listing)
    db.session.commit()
    return {}

@listing_routes.route('/<int:id>')
def listing(id):
    listing = Listing.query.get(id)
    if listing:
        return listing.to_dict
    else:
        return {'error': ['No Listing Found']}

# For all reviews within a listing

@listing_routes.route('/<int:id>/reviews', methods=['GET'])
def listing_reviews(id):
    listing_reviews = Review.query.filter(Review.listing_id == id).all()
    if listing_reviews:
        all_reviews = {}
        for review in listing_reviews:
            all_reviews[review.id] = review.to_dict
        return all_reviews
    else:
        return {'error': ['No Reviews found for this Listing']}