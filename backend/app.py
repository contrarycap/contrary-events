from flask import Flask
from flask import request
from flask import jsonify
from datetime import datetime
import uuid

from gcsa.google_calendar import GoogleCalendar
from gcsa.event import Event

app = Flask(__name__)
calendar = GoogleCalendar(calendar='c_63r96q0f9clmrcb2tentcc6u3k@group.calendar.google.com')


@app.route('/add-event', methods=['POST'])
def create_event():
    data = request.json
    date = data['event-time']
    duration = data['duration']
    hours = duration // 60
    mins = duration % 60

    event = Event(
        summary=data['title'],
        start=datetime(date['year'], date['month'], date['date'], date['hours']),
        end=datetime(date['year'], date['month'], date['date'], date['hours'] + hours, minute=mins)
    )
    try:
        stuff = calendar.add_event(event)
        print(stuff.event_id)
        # gc_primary.update_event()
        return {'event-id': stuff.event_id}, 201
    except:
        return 'GCal Error', 500


@app.route('/update-event', methods=['POST'])
def update_event():
    try:
        data = request.json
        event_id = data['event-id']
        date = data['event_time']
        duration = data['duration']
    except:
        return 'Bad request', 400

    hours = duration // 60
    mins = duration % 60
    event = Event(
        summary=data['title'],
        event_id=event_id,
        start=datetime(date['year'], date['month'], date['date'], date['hours']),
        end=datetime(date['year'], date['month'], date['date'], date['hours'] + hours, minute=mins)
    )
    try:
        calendar.update_event(event)
        return 'Event Updated', 201
    except:
        return 'Event could not be updated', 500


@app.route('/delete-event', methods=['POST'])
def delete_event():
    try:
        data = request.json
        event_id = data['event-id']
    except:
        return 'Bad Request', 400

    try:
        calendar.delete_event(event_id)
        return 'Successfully deleted event', 204
    except:
        return 'Event was not deleted', 500

if __name__ == '__main__':
    app.run(debug=True)
