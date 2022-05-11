from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, SubmitField
from wtforms.validators import DataRequired


class NewReview(FlaskForm):
    userId = IntegerField("User", validators=[DataRequired()])
    listingId = IntegerField("User", validators=[DataRequired()])
    title = StringField("Title", validators=[DataRequired()])
    text = StringField("Text", validators=[DataRequired()])
    rating = SelectField('Rating', choices=[1, 2, 3, 4, 5], validators=[DataRequired()]) #form data is sent to the browser as strings, need to provide a coerce function that converts a string back to the expected type
    submit = SubmitField("Submit")


class EditReview(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    text = StringField("Text", validators=[DataRequired()])
    rating = SelectField('Rating', choices=[1, 2, 3, 4, 5], validators=[DataRequired()]) #form data is sent to the browser as strings, need to provide a coerce function that converts a string back to the expected type
    submit = SubmitField("Submit")