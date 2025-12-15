from flask import Blueprint, jsonify
from app.models import Teacher

main = Blueprint("main", __name__)

@main.route("/api/teachers", methods=["GET"])
def get_teachers():
    teachers = Teacher.query.all()
    return jsonify([t.to_dict() for t in teachers])
