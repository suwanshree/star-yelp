from app.models import db, Listing
from datetime import date

def seed_listings():
    today = date.today()
    listing1 = Listing(
        user_id=1,
        title="Tammany and Sons",
        location='Workers District, Lorville, Hurston, Stanton System', 
        category=3,
        description="Everything you need to get to work at an affordable price and fast service! Owned by Hurston Dynamics, we primarily sell goods to our workers in a truck-shop scheme to ensure no credits leave the Hurston ecosystem.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652883247/star-yelp/tammany_hrxxcs.webp",
        rating=8,
        created_at=today,
        updated_at=today )

    listing2 = Listing(
        user_id=2,
        title="Voyager Bar",
        location='Stratus Shopping Center, Orison, Crusader, Stanton System', 
        category=2,
        description="Best views in the system coupled with the best drinks! You do not want to miss visiting us on your trip to Orison. Located on the roof top of the Stratus Shopping Center in the Cloud View Center district. We are renowned for our amazing viewpoint vantage.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879310/star-yelp/voyager-bar_dfmown.jpg",
        rating=10,
        created_at=today,
        updated_at=today )
    
    listing3 = Listing(
        user_id=3,
        title="Cafe Musain",
        location='Levski, Delamar, Nyx System', 
        category=2,
        description="Your go to spot for all the fun in Levski. Visit us today for an unforgettable experience! Located in the Grand Barter Bazaar and owned by our very own Clair Rios, a lifelong resident of Levski.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879317/star-yelp/cafe-musian_lctagi.jpg",
        rating=9,
        created_at=today,
        updated_at=today )

    listing4 = Listing(
        user_id=4,
        title="G-Loc Bar",
        location='Area 18, ArcCorp, Stanton System', 
        category=2,
        description="Best views in ArcCorp coupled with the best drinks in the whole system. You will be back for more, ask a service member for our daily specials! Check you mobiglass for reservation times and details all at a special price.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879312/star-yelp/g-loc_yt2tw4.jpg",
        rating=10,
        created_at=today,
        updated_at=today )

    listing5 = Listing(
        user_id=5,
        title="Reclamation & Disposal Orinth",
        location='Hurston, Stanton System', 
        category=6,
        description="For all your Reclamation & Disposal needs in Hurston. One stop for all your selling needs. We buy everything and do not ask any questions. Visit us today for a deal of a lifetime and do not forget to tell your friends.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879314/star-yelp/rec-desposal_dzulzu.jpg",
        rating=7,
        created_at=today,
        updated_at=today )

    listing6 = Listing(
        user_id=1,
        title="MacIntyre & Victor's Bar",
        location='Workers District, Lorville, Hurston, Stanton System', 
        category=2,
        description="Best dive bar in the whole of Hurston. Offering drinks all day and night. Visit us to see why they call us the best hangout spot in Lorville, situated on the FO19 Production Quad near Reclamation & Disposal and Maria Pure of Heart.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879313/star-yelp/mnv-bar_f5tqb0.jpg",
        rating=8,
        created_at=today,
        updated_at=today )

    listing7 = Listing(
        user_id=2,
        title="Old’38 Bar",
        location='Grim Hex, Crusader, Stanton System', 
        category=2,
        description="The one and only place to hang out in grim Hex! Come join us for daily specials and ask for our group plans! Old '38 bar is located next to the elevators on the Main Concourse.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879313/star-yelp/old38_osgf5w.jpg",
        rating=6,
        created_at=today,
        updated_at=today )
    
    listing8 = Listing(
        user_id=3,
        title="Hot Dog Stall",
        location='Area 18, ArcCorp, Stanton System', 
        category=1,
        description="Best Hot Dogs in the whole of Stanton right here in Area 18. Grab our flyers for a 1 UEC discount on all jumbo dogs! Rated best fast food franchise of 2950 by Galactic monthly. Stop by and refill anytime!",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879312/star-yelp/hot-dog_crtjoo.jpg",
        rating=8,
        created_at=today,
        updated_at=today )

    listing9 = Listing(
        user_id=4,
        title="Tobin Expo Center",
        location='Expo District, New Babbage, MicroTech, Stanton System', 
        category=6,
        description="Premier Expo location in all of Stanton. Host of Fleet weeks and IAE 2950 and 2951. We are a convention center and can be reached by MT Metroloop from our own station, whether currently holding an event or not our lobby is always open.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879314/star-yelp/tobin-expo_dwfbkv.jpg",
        rating=10,
        created_at=today,
        updated_at=today )

    listing10 = Listing(
        user_id=5,
        title="Empire Hospital",
        location='Area 18, ArcCorp, Stanton System', 
        category=5,
        description="Best location for Tier-3 care in the whole of ArcCorp. Make a reservation today! We have the latest selection for Medguns, medpens and all other stems required for a safe venture in space.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879312/star-yelp/empire-hospital_o7n6qt.jpg",
        rating=8,
        created_at=today,
        updated_at=today )

    listing11 = Listing(
        user_id=1,
        title="Brentworth Care Center",
        location='Residential District, New Babbage, MicroTech, Stanton System', 
        category=5,
        description="One of the best Hospitals in the entire Stanton System. Come visit us any-day for all your healthcare needs! The hospital has five floors with fifty patient rooms and two wings on the ground floor for diagnostics and patient treatment. Block A has the Intensive Care Unit, General Surgery and Cardiology.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879310/star-yelp/brentworth-care-center_n2jgvt.webp",
        rating=10,
        created_at=today,
        updated_at=today )

    listing12 = Listing(
        user_id=2,
        title="Maria Pure of Heart",
        location='Workers District, Lorville, Hurston, Stanton System', 
        category=5,
        description="Your location for the best care in Hurston. Call to today to check availability right from your mobiglass! Named in honour of Maria Wharton, mother of Chesterfield Hurston and matriarch of the Hurston family. The hospital's construction lasted from 2881 to 2889. Over 50,000 patients were admitted during our first year of operation.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879313/star-yelp/maria_ybfjss.webp",
        rating=10,
        created_at=today,
        updated_at=today )
    
    listing13 = Listing(
        user_id=3,
        title="Astro Armada",
        location='Area 18, ArcCorp, Stanton System', 
        category=4,
        description="Best of all the spaceships at the best prices and location. We have monthly specials and ship tours all day! We also sponsor several events such as 'Galactic Tour's Combat Ship of the Year' and Galactic Gear's TV episodes. Check your mobiglass for event schedules.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879310/star-yelp/astro-armada_u7oxkf.jpg",
        rating=9,
        created_at=today,
        updated_at=today )

    listing14 = Listing(
        user_id=4,
        title="Vantage Rentals",
        location='Teasa Spaceport, Lorville, Hurston, Stanton System', 
        category=4,
        description="Fast and easy rentals all day. Check out our daily specials! We are a ship and ground vehicle rental company at the Teasa Spaceport in Lorville on the planet Hurston with branch stores at space stations with Refinery Decks.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879319/star-yelp/vantage-rentals_evfcjy.png",
        rating=7,
        created_at=today,
        updated_at=today )

    listing15 = Listing(
        user_id=5,
        title="Traveler Rentals",
        location='Riker Memorial Spaceport, Area 18, ArcCorp, Stanton System', 
        category=4,
        description="Best rental prices in the whole system. We beat our competition by light years! Extraordinary service and full customer satisfaction guaranteed by our across the verse insurance.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879314/star-yelp/traveler-rentals_fvbh1p.webp",
        rating=8,
        created_at=today,
        updated_at=today )

    listing16 = Listing(
        user_id=1,
        title="Aparelli",
        location='Promenade, New Babbage, MicroTech, Stanton System', 
        category=4,
        description="Everything you need to look sharp while visiting the Promenade. We are a clothing store for high-end clothing. Get one suit free if you buy two suits deal active all day everyday!",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879310/star-yelp/aparelli_gyomn4.jpg",
        rating=10,
        created_at=today,
        updated_at=today )

    listing17 = Listing(
        user_id=2,
        title="New Deal",
        location='Teasa Spaceport, Lorville, Hurston, Stanton System', 
        category=4,
        description="New Deal is one of the most reputed ship dealers in all of the known systems. Best prices for new and used ships everyday! We offer ground vehicles and spacecraft to suit a range of budgets, across a wide range of manufacturers. Our Teasa Spaceport dealership boasts internal and external show floors, allowing customers to explore a range of vehicles on display.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879313/star-yelp/new-deal_flsl7d.webp",
        rating=8,
        created_at=today,
        updated_at=today )
    
    listing18 = Listing(
        user_id=3,
        title="Casaba Outlet",
        location='Area 18, ArcCorp, Stanton System', 
        category=4,
        description="Best clothing at the best price and selection range. ArcCorp's best business rating certified! Casaba Outlet is a clothing-retail company founded by Jean Polanco and Joel Polanco. As of May 2951, Casaba operates 7 stores in the Stanton system.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879311/star-yelp/casaba-outlet_p6yjfm.webp",
        rating=7,
        created_at=today,
        updated_at=today )

    listing19 = Listing(
        user_id=4,
        title="Centermass",
        location='Promenade, New Babbage, MicroTech, Stanton System', 
        category=3,
        description="Your one stop shop for all your spacefaring needs. Centermass always has your back! We are a Human spacecraft weapons and armor retailer with franchise stores in multiple locations across the United Empire of Earth (UEE). Founded as a weapons-only store, we added armor to our inventory in 2939.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879311/star-yelp/centermass_qrbil4.jpg",
        rating=8,
        created_at=today,
        updated_at=today )

    listing20 = Listing(
        user_id=5,
        title="Cubby Blast",
        location='Area 18, ArcCorp, Stanton System', 
        category=3,
        description="Weapons, armor, under-suits and much much more! New deals everyday, grab our coupons from your residence! The store is owned and operated by Clor Vee, who worked hard to clear his name and sprung this business from the ground up all by himself!",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879311/star-yelp/cubby-blast_ygz0xa.webp",
        rating=8,
        created_at=today,
        updated_at=today )

    listing21 = Listing(
        user_id=1,
        title="Dumper’s Depot",
        location='Area 18, ArcCorp, Stanton System', 
        category=3,
        description="All the ship parts you need at the best prices. We have daily deals for the best prices in ArcCorp! Dumper's Depot is a raw materials and used parts dealer. We advertise buying, among other things, salvage, ore, spacesuits, weapons and artifacts. We also supplies factories! The company was founded in 2894 by Burner Zeke.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879312/star-yelp/dumpers-depot_azdqkg.webp",
        rating=7,
        created_at=today,
        updated_at=today )

    listing22 = Listing(
        user_id=2,
        title="Ellroy’s",
        location='Promenade, New Babbage, MicroTech, Stanton System', 
        category=1,
        description="Rated top restaurant in Stanton system 5 times in a row. Come check out why they call us the best restaurant is the verse! Ellroy's is an eatery franchise. Our shops are in New Babbage's Commons area, and most Rest & Relax space stations.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879315/star-yelp/ellroys_gupsih.jpg",
        rating=10,
        created_at=today,
        updated_at=today )
    
    listing23 = Listing(
        user_id=3,
        title="Wally’s Bar",
        location='Promenade, New Babbage, MicroTech, Stanton System', 
        category=2,
        description="An out of the world tropical experience in the heart of New Babbage. Visit us and ask a service member for weekly specials! We feature dance, music and the best lighting show in all of Stanton.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879310/star-yelp/wallys-bar_oys4us.jpg",
        rating=10,
        created_at=today,
        updated_at=today )

    listing24 = Listing(
        user_id=4,
        title="Twyn’s Sandwiches",
        location='Promenade, New Babbage, MicroTech, Stanton System', 
        category=1,
        description="Stop by to try our new line of nourishing sandwiches. Located at the heart of the Promenade we offer a wide range of sandwiches selected from across the 'verse for their taste.",
        image_url="https://res.cloudinary.com/dn0ocfiva/image/upload/v1652879311/star-yelp/twyns-sandwiches_frzcgh.jpg",
        rating=9,
        created_at=today,
        updated_at=today )

    listing25 = Listing(
        user_id=5,
        title="Orison General",
        location='Cloudview Center, Orison, Crusader, Stanton System', 
        category=5,
        description="Best views in the system coupled with the best health-care available anywhere in the known universe! Built upon a military-constructed latticework of inhabitable floating platforms used by Crusader Industries to manufacture their large-scale ships.",
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
