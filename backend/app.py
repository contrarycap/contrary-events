from flask import Flask
from flask import request
from datetime import datetime

from gcsa.google_calendar import GoogleCalendar
from gcsa.event import Event

app = Flask(__name__)


@app.route('/', methods=['POST'])
def create_event():

    data = request.json
    date = data['event_time']
    duration = data['duration']
    hours = duration // 60
    mins = duration % 60

    event = Event(
        summary=data['title'],
        start=datetime(date['year'], date['month'], date['date'], date['hours']),
        end=datetime(date['year'], date['month'], date['date'], date['hours'] + hours, minute=mins)
    )

    gc_primary = GoogleCalendar(calendar='c_63r96q0f9clmrcb2tentcc6u3k@group.calendar.google.com')
    gc_primary.add_event(event)
    return 'Successful', 200


if __name__ == '__main__':
    app.run(debug=True)

