from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/signin", methods=['GET', 'POST'])
def login():
    return render_template('signin.html')

@app.route("/signup", methods=['GET', 'POST'])
def signup():
    return render_template('signup.html')  

if __name__ == "__main__":
    app.run(debug=True)
