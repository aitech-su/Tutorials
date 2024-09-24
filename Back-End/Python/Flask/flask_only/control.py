from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def purchase():
   return render_template('purchase.html')
@app.route("/addToFavorites")
def addToFavorites():
    return "<p>Hello, World!</p>"
@app.route("/removeFromFavorites")
def removeFromFavorites():
  return "<p>removeFromFavorites</p>"