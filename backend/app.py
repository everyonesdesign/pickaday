from flask import Flask, render_template, jsonify
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
	return jsonify(**event)

if __name__ == "__main__":
	app.debug = True
	app.run()