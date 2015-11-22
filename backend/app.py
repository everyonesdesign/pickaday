from flask import Flask, render_template
from utils import respond_with_json

app = Flask(
	__name__, 
	template_folder='../templates', 
	static_folder='../frontend'
)

@app.route("/")
def index():
	return render_template('index.nunj')

@app.route("/events/<int:event_id>")
def get_event(event_id):
	event = {
		'title': 'Event 1',
	}
	return respond_with_json(event)

@app.route("/events/")
def get_events_list():
	events = [
		{
			'title': 'Event 1',
		},
		{
			'title': 'Event 2',
		},
	]
	return respond_with_json(events)

if __name__ == "__main__":
	app.debug = True
	app.run()