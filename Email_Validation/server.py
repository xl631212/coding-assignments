from flask import Flask
from flask_bcrypt import Bcrypt
from flask import Flask, flash, render_template, request, redirect,session
from mysqlconnection import connectToMySQL
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')        
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"        
bcrypt = Bcrypt(app)     # we are creating an object called bcrypt, 
                         # which is made by invoking the function Bcrypt with our app as an argument
mysql = connectToMySQL('EmailValidation')


@app.route('/')
def index():
    all_emails = mysql.query_db("SELECT * FROM email")
    return render_template('index.html', email = all_emails)

@app.route('/process', methods=['POST'])
def create():
    if (not EMAIL_REGEX.match(request.form['email']) or len(request.form['email']) < 1):
        flash('Invalid email format!')
        return redirect("/")
    else:    
        pw_hash = request.form['email']  
        print(pw_hash)
        flash('Valid email format!')  
        # prints something like b'$2b$12$sqjyok5RQccl9S6eFLhEPuaRaJCcH3Esl2RWLm/cimMIEnhnLb7iC'
        # be sure you set up your database so it can store password hashes this long (60 characters)
        query = "INSERT INTO email (username, password_hash) VALUES (%(username)s, %(password_hash)s);"
        # put the pw_hash in our data dictionary, NOT the password the user provided
        data = { "username" : request.form['username'],
                "password_hash" : pw_hash }
        mysql.query_db(query, data)
        # never render on a post, always redirect!
        return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)
