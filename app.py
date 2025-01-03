from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/")
def landingpage():
    return render_template('index.html')
@app.route("/signin", methods=['GET', 'POST'])
def login():
    return render_template('signin.html')

@app.route("/signup", methods=['GET', 'POST'])
def signup():
    return render_template('signup.html')  
@app.route("/privacy")
def ldngpg():
    return render_template('privacy-policy.html')
if __name__ == "__main__":
    app.run(debug=True)
