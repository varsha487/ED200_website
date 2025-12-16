import EventsSection from "../components/EventsSection";
import "./Home.css";

function Home() {
  const reminders = [
    { text: "Picture Day forms due", date: "Dec 18, 2025" },
    { text: "Field trip to African American History Museum forms due", date: "Jan 5, 2026" },
    { text: "Course registration for next year", date: "Jan 20, 2026" },
    { text: "College visits participation", date: "Feb 12, 2026" },
    { text: "Submit volunteer hours for community service", date: "Mar 1, 2026" },
    { text: "Parent-teacher conference sign-ups", date: "Mar 15, 2026" },
    { text: "Science fair project proposals due", date: "Apr 5, 2026" },
    { text: "Financial aid applications deadline", date: "Apr 20, 2026" },
    { text: "Yearbook photo submissions", date: "May 1, 2026" }
  ];

  const teacherShowcase = {
    name: "Ms. Alvarez",
    subject: "Spanish",
    book: "Just Mercy",
    image: "/teachers/alvarez.jpg",
    goals: `Ms. Alvarez is passionate about teaching Spanish as a way to connect students with diverse cultures.
    Her goals are to help students develop strong communication skills, foster cultural awareness, and encourage empathy
    through language learning. She believes that learning a new language opens doors to understanding different communities
    and inspires students to engage thoughtfully with the world.`
  };

  return (
    <div className="home-container">
      
      {/* Left sidebar: Reminders */}
      <aside className="home-side left">
        <h2>Reminders</h2>
        <ul className="reminders-list">
          {reminders.map((reminder, index) => (
            <li key={index} className="reminder-item">
              <span className="reminder-text">{reminder.text}</span>
              <span className="reminder-date">{reminder.date}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Center: Events */}
      <main className="home-center">
        <EventsSection title="Upcoming Events" />
      </main>

{/* Right sidebar: Teacher Showcase */}
<aside className="home-side right">
  <h2 className="sidebar-title">Teacher Showcase</h2>
  <div className="teacher-showcase">
    <img
      src={teacherShowcase.image}
      alt={teacherShowcase.name}
      className="teacher-photo-showcase"
    />
    <h3>{teacherShowcase.name}</h3>
    <p><strong>Teaches:</strong> {teacherShowcase.subject}</p>
    <p><strong>Currently Reading:</strong> {teacherShowcase.book}</p>
    <p className="teacher-goals">{teacherShowcase.goals}</p>
  </div>
</aside>


    </div>
  );
}

export default Home;
