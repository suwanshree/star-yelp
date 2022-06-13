from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired


class NewListing(FlaskForm):
    user_id = IntegerField("User", validators=[DataRequired()])
    title = StringField("Title", validators=[DataRequired()])
    location = StringField("Location", validators=[DataRequired()])
    description = StringField("Description", validators=[DataRequired()])
    image_url = StringField("Image URL", validators=[DataRequired()])
    submit = SubmitField("Submit")


class EditListing(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    location = StringField("Location", validators=[DataRequired()])
    description = StringField("Description", validators=[DataRequired()])
    image_url = StringField("Image URL")
    submit = SubmitField("Submit")

class EditRating(FlaskForm):
    rating = IntegerField("Rating", validators=[DataRequired()])