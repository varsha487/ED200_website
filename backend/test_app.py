# backend/test_routes.py
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Flask is alive"

@app.route("/api/courses")
def courses():
    return {"courses": ["English I", "Algebra I"]}
if __name__ == "__main__":
    app.run(debug=True)