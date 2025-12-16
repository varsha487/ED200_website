import "./Teachers.css";

function Teachers() {
  const teachers = [
    {
      id: 1,
      name: "Ms. Alvarez",
      subject: "Spanish",
      book: "Just Mercy",
      image: "/teachers/alvarez.jpg",
    },
    {
      id: 2,
      name: "Mr. Chen",
      subject: "Physics",
      book: "Between the World and Me",
      image: "/teachers/chen.jpg",
    },
    {
      id: 3,
      name: "Ms. Patel",
      subject: "English",
      book: "The New Jim Crow",
      image: "/teachers/patel.jpg",
    },
    {
      id: 4,
      name: "Mr. Thompson",
      subject: "U.S. History",
      book: "How to be an Antiracist",
      image: "/teachers/thompson.jpg",
    },

        {
      id: 5,
      name: "Ms. Carson",
      subject: "English",
      book: "Caste: The Origins of Our Discontents",
      image: "/teachers/carson.jpg",
    },
         {
      id: 6,
      name: "Mr. Pearson",
      subject: "Economics",
      book: "The Hate U Give",
      image: "/teachers/pearson.jpg",
    },

    {
      id: 7,
      name: "Mr. Gopal",
      subject: "Hindi",
      book: "The Children Act",
      image: "/teachers/gopal.jpg",
    },
    {
      id: 8,
      name: "Ms. Goldberg",
      subject: "Russian",
      book: "Why We Get the Wrong Politicians",
      image: "/teachers/goldberg.jpg",
    },
    {
      id: 9,
      name: "Ms. Johnson",
      subject: "Physics",
      book: "Transitional Justice",
      image: "/teachers/johnson.jpg",
    },
        {
      id: 10,
      name: "Ms. Yra",
      subject: "Biology",
      book: "The Merchant of Justice",
      image: "/teachers/yra.jpg",
    },
            {
      id: 11,
      name: "Ms. Casey",
      subject: "Government",
      book: "Evicted",
      image: "/teachers/casey.jpg",
    },
                {
      id: 12,
      name: "Ms. Doyle",
      subject: "Math",
      book: "The Fire Next Time",
      image: "/teachers/doyle.jpg",
    },
                    {
      id: 13,
      name: "Ms. Klein",
      subject: "Math",
      book: "Citizen",
      image: "/teachers/klein.jpg",
    },
                        {
      id: 14,
      name: "Ms. Lewis",
      subject: "Biology",
      book: "Slavery By Another Name",
      image: "/teachers/lewis.jpg",
    },
                        {
      id: 15,
      name: "Ms. Rose",
      subject: "Personal Finance",
      book: "Rethinking Incarceration",
      image: "/teachers/rose.jpg",
    },
                        {
      id: 16,
      name: "Mr. Simpson",
      subject: "Math",
      book: "Missoula",
      image: "/teachers/simpson.jpg",
    },
                        {
      id: 17,
      name: "Ms. Burton",
      subject: "World History",
      book: "Shantaram",
      image: "/teachers/burton.jpg",
    },
                            {
      id: 18,
      name: "Ms. Briggs",
      subject: "Personal Finance",
      book: "The Round House",
      image: "/teachers/briggs.jpg",
    },
                            {
      id: 19,
      name: "Mr. Gonzales",
      subject: "History",
      book: "Small Great Things",
      image: "/teachers/gonzales.jpg",
    },
                            {
      id: 20,
      name: "Ms. Dunn",
      subject: "English",
      book: "The Other Wes Moore",
      image: "/teachers/dunn.jpg",
    },
  ];

  return (
    <div className="teachers-page">
      <h1>Our Teachers</h1>

      <div className="teachers-grid">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="teacher-card">
            <img
              src={teacher.image}
              alt={teacher.name}
              className="teacher-photo"
            />

            <h3>{teacher.name}</h3>
            <p><strong>Teaches:</strong> {teacher.subject}</p>
            <p><strong>Currently Reading:</strong> {teacher.book}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;
