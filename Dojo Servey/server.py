from flask import Flask, render_template,session,request,redirect

app = Flask(__name__)

@app.route("/")
def index():
	return render_template('DojoSer.html')

@app.route('/result', methods=['POST'])
def create():
	return render_template('result.html')


if __name__ == "__main__":
	app.run(debug = True)	