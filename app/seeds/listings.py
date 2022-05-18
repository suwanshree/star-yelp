from app.models import db, Listing
from datetime import date

def seed_listings():
    today = date.today()
    listing1 = Listing(
        user_id=1,
        title="Tammany and Sons",
        location='Workers District, Lorville, Hurston, Stanton System', 
        description="Everything you need to get to work at an affordable price and fast service!",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652883247/star-yelp/tammany_hrxxcs.webp",
        rating=8,
        created_at=today,
        updated_at=today )

    listing2 = Listing(
        user_id=2,
        title="Voyager Bar",
        location='Stratus Shopping Center, Orison, Crusader, Stanton System', 
        description="Best views in the system coupled with the best drinks!",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879310/star-yelp/voyager-bar_dfmown.jpg",
        rating=10,
        created_at=today,
        updated_at=today )
    
    listing3 = Listing(
        user_id=3,
        title="Cafe Musain",
        location='Levski, Delamar, Nyx System', 
        description="Your go to spot for all the fun in Levski",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879317/star-yelp/cafe-musian_lctagi.jpg",
        rating=9,
        created_at=today,
        updated_at=today )

    listing4 = Listing(
        user_id=4,
        title="G-Loc Bar",
        location='Area 18, ArcCorp, Stanton System', 
        description="Best views in the system coupled with the best drinks!",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879312/star-yelp/g-loc_yt2tw4.jpg",
        rating=10,
        created_at=today,
        updated_at=today )

    listing5 = Listing(
        user_id=5,
        title="Reclamation & Disposal Orinth",
        location='Hurston, Stanton System', 
        description="For all your Reclamation & Disposal needs in Hurston",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879314/star-yelp/rec-desposal_dzulzu.jpg",
        rating=7,
        created_at=today,
        updated_at=today )

    listing6 = Listing(
        user_id=1,
        title="MacIntyre & Victor's Bar",
        location='Workers District, Lorville, Hurston, Stanton System', 
        description="Best dive bar in the whole of Hurston. Offering drinks all day and night.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879313/star-yelp/mnv-bar_f5tqb0.jpg",
        rating=8,
        created_at=today,
        updated_at=today )

    listing7 = Listing(
        user_id=2,
        title="Old’38 Bar",
        location='Grim Hex, Crusader, Stanton System', 
        description="The one and only place to hang out in grim Hex",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879313/star-yelp/old38_osgf5w.jpg",
        rating=6,
        created_at=today,
        updated_at=today )
    
    listing8 = Listing(
        user_id=3,
        title="Hot Dog Stall",
        location='Area 18, ArcCorp, Stanton System', 
        description="Best Hot Dogs in the whole of Stanton right here in Area 18",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879312/star-yelp/hot-dog_crtjoo.jpg",
        rating=8,
        created_at=today,
        updated_at=today )

    listing9 = Listing(
        user_id=4,
        title="Tobin Expo Center",
        location='Expo District, New Babbage, MicroTech, Stanton System', 
        description="Premeir Expo location in all of Stanton. Host of Fleet weeks and IAE 2950 and 2951.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879314/star-yelp/tobin-expo_dwfbkv.jpg",
        rating=10,
        created_at=today,
        updated_at=today )

    listing10 = Listing(
        user_id=5,
        title="Empire Hospital",
        location='Area 18, ArcCorp, Stanton System', 
        description="Best location for Tier-3 care in the whole of ArcCorp",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879312/star-yelp/empire-hospital_o7n6qt.jpg",
        rating=8,
        created_at=today,
        updated_at=today )

    listing11 = Listing(
        user_id=1,
        title="Brentworth Care Center",
        location='Residential District, New Babbage, MicroTech, Stanton System', 
        description="One of the best Hospitals in the entire Stanton System",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879310/star-yelp/brentworth-care-center_n2jgvt.webp",
        rating=10,
        created_at=today,
        updated_at=today )

    listing12 = Listing(
        user_id=2,
        title="Maria Pure of Heart",
        location='Workers District, Lorville, Hurston, Stanton System', 
        description="Your location for the best care in Hurston.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879313/star-yelp/maria_ybfjss.webp",
        rating=10,
        created_at=today,
        updated_at=today )
    
    listing13 = Listing(
        user_id=3,
        title="Astro Armada",
        location='Area 18, ArcCorp, Stanton System', 
        description="Best of spaceships at the best prices and location.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879310/star-yelp/astro-armada_u7oxkf.jpg",
        rating=9,
        created_at=today,
        updated_at=today )

    listing14 = Listing(
        user_id=4,
        title="Vantage Rentals",
        location='Teasa Spaceport, Lorville, Hurston, Stanton System', 
        description="Fast and easy rentals all day.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879319/star-yelp/vantage-rentals_evfcjy.png",
        rating=7,
        created_at=today,
        updated_at=today )

    listing15 = Listing(
        user_id=5,
        title="Traveler Rentals",
        location='Riker Memorial Spaceport, Area 18, ArcCorp, Stanton System', 
        description="Best rental prices in the whole system.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879314/star-yelp/traveler-rentals_fvbh1p.webp",
        rating=8,
        created_at=today,
        updated_at=today )

    listing16 = Listing(
        user_id=1,
        title="Aparelli",
        location='Promenade, New Babbage, MicroTech, Stanton System', 
        description="Everything you need to look sharp while visting the Promenade.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879310/star-yelp/aparelli_gyomn4.jpg",
        rating=10,
        created_at=today,
        updated_at=today )

    listing17 = Listing(
        user_id=2,
        title="New Deal",
        location='Teasa Spaceport, Lorville, Hurston, Stanton System', 
        description="New Deal is one of the most reputed ship dealers in all of the known systems.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879313/star-yelp/new-deal_flsl7d.webp",
        rating=8,
        created_at=today,
        updated_at=today )
    
    listing18 = Listing(
        user_id=3,
        title="Casaba Outlet",
        location='Area 18, ArcCorp, Stanton System', 
        description="Best clothing at the best price and selection range.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879311/star-yelp/casaba-outlet_p6yjfm.webp",
        rating=7,
        created_at=today,
        updated_at=today )

    listing19 = Listing(
        user_id=4,
        title="Centermass",
        location='Promenade, New Babbage, MicroTech, Stanton System', 
        description="Your 1 stop shop for you ship part needs.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879311/star-yelp/centermass_qrbil4.jpg",
        rating=8,
        created_at=today,
        updated_at=today )

    listing20 = Listing(
        user_id=5,
        title="Cubby Blast",
        location='Area 18, ArcCorp, Stanton System', 
        description="Weapons, armor, undersuits and much much more!",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879311/star-yelp/cubby-blast_ygz0xa.webp",
        rating=8,
        created_at=today,
        updated_at=today )

    listing21 = Listing(
        user_id=1,
        title="Dumper’s Depot",
        location='Area 18, ArcCorp, Stanton System', 
        description="All the ship parts you need at the best prices.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879312/star-yelp/dumpers-depot_azdqkg.webp",
        rating=7,
        created_at=today,
        updated_at=today )

    listing22 = Listing(
        user_id=2,
        title="Ellroy’s",
        location='Promenade, New Babbage, MicroTech, Stanton System', 
        description="Rated top restaurant in Stanton system 5 times in a row.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879315/star-yelp/ellroys_gupsih.jpg",
        rating=10,
        created_at=today,
        updated_at=today )
    
    listing23 = Listing(
        user_id=3,
        title="Wally’s Bar",
        location='Promenade, New Babbage, MicroTech, Stanton System', 
        description="An out of the world tropical experience in the heart of New Babbage.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879310/star-yelp/wallys-bar_oys4us.jpg",
        rating=10,
        created_at=today,
        updated_at=today )

    listing24 = Listing(
        user_id=4,
        title="Twin’s Sandwiches",
        location='Promenade, New Babbage, MicroTech, Stanton System', 
        description="Stop by to try our new line of nourishing sandwiches.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879311/star-yelp/twyns-sandwiches_frzcgh.jpg",
        rating=9,
        created_at=today,
        updated_at=today )

    listing25 = Listing(
        user_id=5,
        title="Orison General",
        location='Cloudview Center, Orison, Crusader, Stanton System', 
        description="Best views in the system coupled with the best healtcare available.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879314/star-yelp/orison-general_tgw8m3.webp",
        rating=10,
        created_at=today,
        updated_at=today )

    db.session.add(listing1)
    db.session.add(listing2)
    db.session.add(listing3)
    db.session.add(listing4)
    db.session.add(listing5)
    db.session.add(listing6)
    db.session.add(listing7)
    db.session.add(listing8)
    db.session.add(listing9)
    db.session.add(listing10)
    db.session.add(listing11)
    db.session.add(listing12)
    db.session.add(listing13)
    db.session.add(listing14)
    db.session.add(listing15)
    db.session.add(listing16)
    db.session.add(listing17)
    db.session.add(listing18)
    db.session.add(listing19)
    db.session.add(listing20)
    db.session.add(listing21)
    db.session.add(listing22)
    db.session.add(listing23)
    db.session.add(listing24)
    db.session.add(listing25)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_listings():
    db.session.execute('TRUNCATE listings RESTART IDENTITY CASCADE;')
    db.session.commit()
