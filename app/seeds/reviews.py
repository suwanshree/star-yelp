from app.models import db, Review
from datetime import date

def seed_reviews():
    today = date.today()
    review1 = Review(
        user_id=2,
        listing_id=1,
        title="Not too bad..",
        text="Its what I expected from Hurston really, can't even buy a decent weapon here. But they do have everything else for a 1 stop shopping experience.", 
        rating=5,
        created_at=today,
        updated_at=today )

    db.session.add(review1)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
