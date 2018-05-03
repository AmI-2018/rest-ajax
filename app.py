from flask import Flask, redirect, render_template, url_for
from flask_bootstrap import Bootstrap

app = Flask(__name__)
Bootstrap(app)

@app.route('/')
def hello_world():
    return redirect(url_for('tasks'))

@app.route('/tasks.html')
def tasks():
    return render_template('tasks.html')


