import { useEffect, useState } from "react";

function App() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("/api/teachers")
      .then(res => res.json())
      .then(data => setTeachers(data));
  }, []);

  return (
    <div>
      <h1>Teachers</h1>
      <ul>
        {teachers.map(t => (
          <li key={t.id}>
            {t.name} (Grade {t.grade})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
