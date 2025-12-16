from flask import Blueprint, jsonify
from app.models import Teacher, Course

main = Blueprint("main", __name__)

@main.route("/api/teachers", methods=["GET"])
def get_teachers():
    teachers = Teacher.query.all()
    return jsonify([t.to_dict() for t in teachers])

@main.route("/api/courses", methods=["GET"])
def get_courses():
    courses = Course.query.all()
    return jsonify([c.to_dict() for c in courses])