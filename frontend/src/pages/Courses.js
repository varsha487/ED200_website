import { useEffect, useState } from "react";
import "./Courses.css";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/api/courses")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  const coursesByGrade = (grade) =>
    courses.filter(course => course.grade === grade);

  return (
    <div className="courses-container">
      <h1>Courses by Grade</h1>

      <div className="courses-grid">

        {[9, 10, 11, 12].map(grade => (
          <div className="grade-column" key={grade}>
            <h2>Grade {grade}</h2>
            <ul>
              {coursesByGrade(grade).map(course => (
                <li key={course.id}>
              <strong>{course.name}</strong>
              {course.description && <p>{course.description}</p>}
            </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Courses;
