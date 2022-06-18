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

    review2 = Review(
        user_id=2,
        listing_id=25,
        title="Not Good",
        text="The equipment they use is decades old, as a medial professional I can vouch for that.", 
        rating=2,
        created_at=today,
        updated_at=today )

    review3 = Review(
        user_id=3,
        listing_id=25,
        title="It was okay",
        text="Service was fine really. All hospitals in Stanton are kind of the same. The view from my ward was fantastic though.", 
        rating=4,
        created_at=today,
        updated_at=today )

    review4 = Review(
        user_id=3,
        listing_id=24,
        title="Bad service!!",
        text="Watch out! Even though their sandwiches are very good, the service at this particular location was appalling. We waited over 30 minutes for 2 sandwiches and were treated very badly. Will not visit again.", 
        rating=2,
        created_at=today,
        updated_at=today )

    review5 = Review(
        user_id=5,
        listing_id=24,
        title="Pretty good",
        text="I don't get the hype. Very tasty sandwiches but the price is a bit too high for me.", 
        rating=4,
        created_at=today,
        updated_at=today )

    review6 = Review(
        user_id=2,
        listing_id=23,
        title="Five stars all the way",
        text="Unbelievable experience coupled with an amazing atmosphere, a must visit.", 
        rating=5,
        created_at=today,
        updated_at=today )

    review7 = Review(
        user_id=4,
        listing_id=23,
        title="Will visit again!",
        text="Great staff and premium drinks all at an affordable price. You can spend hours here and won't feel the time pass by.", 
        rating=5,
        created_at=today,
        updated_at=today )

    review8 = Review(
        user_id=5,
        listing_id=23,
        title="Absolutely Amazing!",
        text="If you don't live in Microtech and are just visiting. This is a once in a lifetime opportunity to visit the bar. A tropical experience almost like the real one. Cannot miss!", 
        rating=5,
        created_at=today,
        updated_at=today )

    review9 = Review(
        user_id=5,
        listing_id=22,
        title="Poor Selection",
        text="Food is okay-ish. Expected much better from all the different awards this place boasts about.", 
        rating=3,
        created_at=today,
        updated_at=today )

    review10 = Review(
        user_id=4,
        listing_id=21,
        title="Great Deals",
        text="Heard about this from a friend and was not disappointed with the visit. All my needs were taken care of in a prompt manner. The place could use some repair or renovation though.", 
        rating=4,
        created_at=today,
        updated_at=today )

    review11 = Review(
        user_id=2,
        listing_id=20,
        title="They have everything!",
        text="Whatever you need for your journey, this is a 1 stop shop.", 
        rating=5,
        created_at=today,
        updated_at=today )

    review12 = Review(
        user_id=3,
        listing_id=19,
        title="Very Impressed",
        text="Their weapons selection is very wide and they offer discounts on multiple purchases as well. Will visit again!", 
        rating=5,
        created_at=today,
        updated_at=today )

    review13 = Review(
        user_id=4,
        listing_id=18,
        title="Great prices",
        text="Although the store looks a bit poorly managed, their prices are mazing and the staff are very friendly. Would recommend a visit!", 
        rating=4,
        created_at=today,
        updated_at=today )

    review14 = Review(
        user_id=4,
        listing_id=17,
        title="Pushy salesmen",
        text="I would be fine if the salesmen were not so pushy. Constantly asking questions and following you around even after being told that I wanted to be left alone. Definitely on commission employees trying hard to make a sale.", 
        rating=3,
        created_at=today,
        updated_at=today )

    review15 = Review(
        user_id=2,
        listing_id=16,
        title="Very classy",
        text="The suits feel very premium and they offer a wide variety. Deals are great too!", 
        rating=5,
        created_at=today,
        updated_at=today )

    review16 = Review(
        user_id=3,
        listing_id=15,
        title="Great Selection!",
        text="Slow service but their selection was very big and the ship performed very well! Would definitely recommend a visit for your rental needs.", 
        rating=4,
        created_at=today,
        updated_at=today )

    review17 = Review(
        user_id=5,
        listing_id=14,
        title="Okay at best",
        text="Was told my reservation did not process upon arrival even after I showed the confirmation email. They did fix it for me though but it took a long time.", 
        rating=3,
        created_at=today,
        updated_at=today )

    review18 = Review(
        user_id=2,
        listing_id=13,
        title="My first Ship!",
        text="Bought my first ship here! They always have a great staff on the floor and their ships are in very good condition. Will return for my second one soon!", 
        rating=5,
        created_at=today,
        updated_at=today )

    review19 = Review(
        user_id=3,
        listing_id=12,
        title="Bit weird.",
        text="Everything was fine but the comms message they play every now and then is a bit weird.", 
        rating=3,
        created_at=today,
        updated_at=today )

    review20 = Review(
        user_id=4,
        listing_id=11,
        title="Best in Stanton",
        text="This is by far the best hospital in Stanton, get all your care here.", 
        rating=5,
        created_at=today,
        updated_at=today )

    review21 = Review(
        user_id=4,
        listing_id=10,
        title="Could be better",
        text="First time here, definitely lacking but not going to complain as their service is very fast.", 
        rating=4,
        created_at=today,
        updated_at=today )

    review22 = Review(
        user_id=2,
        listing_id=9,
        title="Fantastic!",
        text="We had an amazing time. All the new ships were in display when we visited. The venue is top-notch, highly recommended!", 
        rating=5,
        created_at=today,
        updated_at=today )

    review23 = Review(
        user_id=5,
        listing_id=8,
        title="Cheap and healthy",
        text="They have passed all health inspections looks like, cannot beat their deals, must stop for a quick bite!", 
        rating=4,
        created_at=today,
        updated_at=today )

    review24 = Review(
        user_id=3,
        listing_id=7,
        title="Best in the belt!",
        text="If you do end up in Grim Hex, this bar certainly is a great hangout spot.", 
        rating=5,
        created_at=today,
        updated_at=today )

    review25 = Review(
        user_id=4,
        listing_id=6,
        title="Important spot!",
        text="If you need to meet influential figures in Hurston besides the Hurston family, it has to be here!", 
        rating=5,
        created_at=today,
        updated_at=today )

    review26 = Review(
        user_id=2,
        listing_id=5,
        title="Bit Shady.",
        text="It is kind of obvious from their motto but they actually try to rip you off. Do not go here!", 
        rating=1,
        created_at=today,
        updated_at=today )

    review27 = Review(
        user_id=3,
        listing_id=5,
        title="They are not lying",
        text="Came here with some rare items. They immediately processed everything without questions! Highly recommended.", 
        rating=4,
        created_at=today,
        updated_at=today )

    review28 = Review(
        user_id=5,
        listing_id=4,
        title="ArcCorp vibes",
        text="Not Amazing but this will do, plus they have specials!", 
        rating=4,
        created_at=today,
        updated_at=today )

    review29 = Review(
        user_id=5,
        listing_id=3,
        title="Not too bad for Levski",
        text="Bartenders are great! The place smells a bit though.", 
        rating=4,
        created_at=today,
        updated_at=today )

    review30 = Review(
        user_id=5,
        listing_id=3,
        title="Amazing views!",
        text="No other bar beats the views this one has. Must visit if in Orison!", 
        rating=5,
        created_at=today,
        updated_at=today )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review10)
    db.session.add(review11)
    db.session.add(review12)
    db.session.add(review13)
    db.session.add(review14)
    db.session.add(review15)
    db.session.add(review16)
    db.session.add(review17)
    db.session.add(review18)
    db.session.add(review19)
    db.session.add(review20)
    db.session.add(review21)
    db.session.add(review22)
    db.session.add(review23)
    db.session.add(review24)
    db.session.add(review25)
    db.session.add(review26)
    db.session.add(review27)
    db.session.add(review28)
    db.session.add(review29)
    db.session.add(review30)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
