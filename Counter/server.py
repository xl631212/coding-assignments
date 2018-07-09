from flask import Flask, render_template, request, redirect,session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' 
# our index route will handle rendering our form

@app.route('/')
def index():
	if 'count' in session:
		print('count exists!')
		session['count'] += 1
		return render_template("index.html", count = session['count'])
	else:
		print("key 'count' does NOT exist")
		session['count'] = 1
		return render_template("index.html", count = session['count'])
# this route will handle our form submission
@app.route('/2')
def AddTwo():
	session['count'] += 1
	print(session)
	return redirect('/')

@app.route('/reset')
def Reset():
	session['count'] = 0
	print(session)
	return redirect('/')

@app.route('/destroy_session')
def distory_session():
	session.clear()
	print(session)
	return redirect('/')

 
if __name__=="__main__":

    app.run(debug=True) 