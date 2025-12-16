import "./EventsSection.css";

function EventsSection({ title = "Upcoming Events" }) {
  const events = [
    {
      id: 1,
      title: "Fall Arts Showcase",
      date: "October 12",
      description: "Student performances and art exhibitions."
    },
    {
      id: 2,
      title: "Community Forum",
      date: "November 3",
      description: "Discussion on local and global issues."

    },
    
    {
      id: 3,
      title: "Senior Capstone Night",
      date: "December 5",
      description: "Grade 12 capstone project presentations."
    },
    {
  id: 4,
  title: "Student-Led Social Justice Forum",
  date: "January 18",
  description: "Students present research on contemporary social issues and lead moderated discussions with peers and community members."
},
{  id: 5,
  title: "Winter Cultural Festival",
  date: "February 10",
  description: "Celebration of diverse cultures with performances, food, and activities."
},
{  id: 6,
  title: "Spring Science Fair",
  date: "March 22",
  description: "Students showcase their scientific research and experiments."
} ,{  id: 7,
  title: "Earth Day Community Clean-Up",
  date: "April 20",
  description: "Students and community members participate in local environmental conservation efforts."
} ,{  id: 8,
  title: "Arts Integration Week",
  date: "May 15-19",
  description: "A week-long series of interdisciplinary projects combining arts with core subjects."
},
{  id: 9,
  title: "Graduation Ceremony",
  date: "June 10",
  description: "Celebration of Grade 12 students' achievements and graduation."
},
{id: 10,
  title: "Summer Learning Expo",
  date: "June 25",
  description: "Showcase of summer learning programs and opportunities for students."
}

  ];

  return (
    <section className="events-section">
      <h2>{title}</h2>

      <div className="events-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventsSection;
