import "./About.css";

function About() {
  return (
    <div className="about-container">
      <article className="about-content">
        <h1>About My ED 200 Project</h1>

        <p>
    My ED 200 project is to create a hypothetical website for a fictional high school named Edgemont Academy. 
    The website is designed to provide information about the school's mission, faculty, courses, events, and commitment to transparency. 
    I take inspiration from my field experiences at Fenway High School, the course readings, and my own
    personal experiences as a high school student.
        </p>

        <p>
There are several features of this website that were inspired by my field experiences at Fenway High School.
For example, for each teacher, there is a "currently reading" feature. This was on the doors of every classroom
at Fenway, and I thought it was an effective way at showcasing the diverse interests of the faculty while also promoting justice-based novels.
One of them is even the book for <em>Origin</em> (Duvernay, 2023), the movie we watched in class.
I was also inspired by my statistics class I observed in which the teacher often used real current events to motivate
key statistical concepts. As a result, I added interdiciplinary course descriptions that highlight real-world applications of the subjects being taught.
Each course, while based on traditional high school curricula, has a unique theme that goes beyond the 
        </p>

        <p>
        I was also inspired by our discussions on community involvement and transparency in education.
        Specifically, we watched the documentary, <em>Voyage of the Pilgrims</em> (Butler, 1995), where Levy involved his students in community 
        outreach for raising money and sending newsletters. This is what the transparency page is based on, where
        the school shares its financials and annual reports with the public to promote trust and accountability. 
        It reveals how the school allocates its resources and prioritizes student success.
        </p>

        <p>
          Another key aspect of this project was the emphasis on politics integrated in education. This was inspired by
          both my field experiences and our reading on idiocy (Parker, 2005). I wanted to intentionally include
          educational content that encourages critical thinking about societal structures and power dynamics, as to not
          raise students without current event and relevant political knowledge that they can apply.
        </p>

        <p>
          Moreover, I noticed that there can often be a disconnect in what we learn in schools and our
          personal experiences, often due to the idealized presentation of society that we learn in schools. Baldwin (1963) 
          discusses this specifically in his essay "A Talk to Teachers," where he highlights the importance of acknowledging the realities of
          minoritized students' lives outside of school. 
          To address this, I have incorporated themes of social justice, equity, and real-world applications throughout the website's content.
          This is why, in many of the courses, especially the history ones, I try to place an emphasis continuity 
          and the lasting effects of historical events.
        </p>

        <h2>References</h2>

        <ol>
          <li>Baldwin, J. (1963/2000). Chapter Eight: A Talk to Teachers. <em>Counterpoints, 107,</em> 123-131. </li>
          <li>Butler, T. P. (1995). <em>Voyage of the pilgrims ‘92 </em>[Film]. New American Schools Corporation. </li>
          <li>Duvernay, A. (2023). <em>Origin </em>[Film]. Neon. </li>
          <li>Parker, W. C. (2005). <em>Teaching against idiocy.</em> Phi Delta Kappan, 86(5), 344-351. </li>
        </ol>
      </article>
    </div>
  );
}

export default About;
