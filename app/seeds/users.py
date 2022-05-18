from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    suwan = User(
        username='Suwan', email='suwan@star.com', password='password')
    erad = User(
        username='Erad', email='erad@star.com', password='password')
    morph = User(
        username='Morph', email='morph@star.com', password='password')
    dg = User(
        username='DG360', email='dg360@star.com', password='password')

    db.session.add(demo)
    db.session.add(suwan)
    db.session.add(erad)
    db.session.add(morph)
    db.session.add(dg)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
