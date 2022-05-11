from flask import Blueprint, request
from ..forms import NewListing, EditListing
from ..models import db, Listing


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

@listing_routes.route('/<int:id>')
def listing(id):
    listing = Listing.query.get(id)
    if listing:
        return listing.to_dict
    else:
        return {'error': ['No Listing Found']}