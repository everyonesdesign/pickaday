from flask import Flask, render_template, jsonify
app = Flask(
	__name__, 
	template_folder='../templates', 
	static_folder='../frontend'
)

@app.route("/")
def index():
    return render_template('index.nunj')

if __name__ == "__main__":
    app.run()