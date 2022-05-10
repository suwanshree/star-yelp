from app.models import db, Listing
from datetime import date

def seed_listings():
    today = date.today()
    listing1 = Listing(
        user_id=1,
        title="Tammany and Sons",
        location='Workers District, Lorville, Hurston, Stanton', 
        description="Everything you need to get to work at an affordable price and fast service!",
        image_url="https://static.wikia.nocookie.net/starcitizen/images/7/7c/Tammany_and_Sons_-_entrance.png",
        rating=8,
        created_at=today,
        updated_at=today )

    listing2 = Listing(
        user_id=1,
        title="Voyager Bar",
        location='Stratus Shopping Center, Orison, Crusader, Stanton', 
        description="Best views in the system coupled with the best drinks!",
        image_url="https://i.pinimg.com/564x/d6/d0/51/d6d0519d0ff45e9860e1c97d708f1ee5.jpg",
        rating=10,
        created_at=today,
        updated_at=today )

    db.session.add(listing1)
    db.session.add(listing2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_listings():
    db.session.execute('TRUNCATE listings RESTART IDENTITY CASCADE;')
    db.session.commit()
