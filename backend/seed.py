from app import create_app, db
from app.models import Course

app = create_app()

with app.app_context():
    db.drop_all()
    db.create_all()
    lang_description = """Students are required to take
               a foreign language for all four years of high school. While this is a large requirement,
               we offer a unique variety of languages to choose from including Spanish, French, Mandarin,
               German, Latin, Hindi, Arabic, Russian, Korean, Italian and American Sign Language. Studying 
               a foreign language at our high school not only focuses on language acquisition but also
               emphasizes cultural understanding and global awareness. They will have discussions on food,
               culture, traditions, current events, and history related to the language they are studying. This 
               course is designed to be immersive."""

    courses = [
        #9th grade courses
        Course(name="English I: Personal Storytelling, the Power of One Voice", grade=9,
               description="This course will focus on personal narratives and storytelling on an individual " \
               "level. Students will explore various forms of storytelling, including memoirs, autobiographies, " \
               "and personal essays. They will learn how to craft compelling narratives that highlight their unique " \
               "perspectives and experiences. Beyong personal storytelling, students will learn the importance of "\
               "how one story can impact a larger community through discussions on social justice, activism, and the power of "\
               "individual voices in effecting change."),
        Course(name="Algebra I: Logic and Reasoning", grade=9, description="""
               This course introduces students to the fundamental concepts of Algebra I, with a focus on developing logical reasoning skills.
               While the application will be in algebra, a focus on systematic problem solving and critical thinking will be emphasized.
               Students will learn how to identify patterns in math problems, construct logical arguments, and apply reasoning to solve equations and inequalities.
               Topics covered include linear equations, functions, polynomials, and quadratic equations. The goal of this class is to build a strong foundation in algebra while enhancing students' overall logical thinking abilities."""),
        Course(name="Biology: Personal Health and Development", grade=9, description="""
               This course focuses on core introductory biology concepts with an emphasis on personal health and human development.
               Topics covered include cell biology, genetics, evolution, ecology, and human anatomy and physiology.
               The course places a special emphasis on understanding the human body, nutrition, mental health, and
               wellness practices. Students will learn how biological principles apply to their own health and well-being,
               empowering them to make informed decisions about their lifestyles and health choices."""),
        Course(name="World History: Cross Cultural Contacts", grade=9, description="""
               This course covers many of the fundamental concepts in World History, but it also goes further to explore
               the interconnectedness of our world. This course explores significant cross-cultural interactions throughout world history, emphasizing the exchange of ideas,
               goods, and technologies among diverse civilizations. Students will examine key historical events such as the Silk Road,
               the Age of Exploration, and the Columbian Exchange, analyzing how these interactions shaped societies and influenced global development.
               The course aims to foster an understanding of cultural diversity and interconnectedness, highlighting the impact of cross-cultural contacts on art, religion, politics, and economics."""),
        Course(name="Foreign Language I", grade=9, description=lang_description),

        #10th grade courses
        Course(name="English II: Fiction, Creativity, and Imagination", grade=10, description="""
               This course will focus on exploring various forms of fiction, including short stories, novels, and
               creative writing. Students will analyze literary techniques used by authors to create engaging narratives
               and develop their own creative writing skills. The course will encourage students to use their imagination
               and creativity to craft original stories, poems, and other forms of fiction. There will also be a focus
               on fiction novels that explore the role of government and societal structures in shaping individual lives and communities."""),
        Course(name="Geometry: Math in Art", grade=10, description="""
               This course explores the fundamental concepts of geometry through the lens of art and design.
               Students will learn about required geometric principles while engaging in
               interdisciplinary topics that reveal the role of math in art. Topics include symmetry,
               tessellations, perspective, proportions, origami, fractals and the golden ratio."""),
        Course(name="Chemistry: Science Behind Cooking", grade=10, description="""
This course delves into fundamental chemistry concepts, using cooking and food science as practical applications.
Students will explore topics such as the properties of matter, chemical reactions, acids and bases,
and the molecular structure of food. Through hands-on experiments and cooking activities, students will
learn how chemical principles influence cooking processes like baking, emulsification, fermentation,
and preservation."""),
        Course(name="U.S. History: Whose America?", grade=10, description="""
               This course examines U.S. history from multiple perspectives, focusing on the diverse experiences
               that have shaped the nation. They will explore the question of what it means to be "American" by analyzing
               historical events, social movements, and cultural contributions from various groups including
               Indigenous peoples, immigrants, African Americans, women, and other marginalized communities."""),
        Course(name="Foreign Language II", grade=10, description=lang_description),

        #11th grade courses
        Course(name="English III: Literature, Politics, Research, and Misinformation", grade=11, description="""
               This humanities class focuses on research and writing, with a theme of politics and 
               and how to produce quality research, especially with the plethora of inaccurate sources
               and misinformation in this digital age."""),
        Course(name="Algebra II: Modeling the World with Numbers", grade=11, description="""
               This math course covers the fundamental concepts of Algebra II, with a focus on real-world applications and modeling.
               Students will learn how to use algebraic equations and functions to represent and analyze various phenomena in
               fields such as economics, biology, physics, and social sciences. Topics include polynomial functions,
               exponential and logarithmic functions, systems of equations, and data analysis. The goal of this class is to appeal
               and reveal the relevance of algebra in everyday life and various career paths."""),
        Course(name="Physics: Science of Music and Entertainment", grade=11, description="""
               This course explores fundamental physics concepts for high school students, integrating ideas of music and entertainment.
               This will specifically be obvious when studying sound waves, acoustics, and the physics of musical instruments.
               Students will learn about motion, forces, energy, and waves while examining how these principles apply to music production,
               audio technology, and live performances."""),
        Course(name="US Government and Civics: Current Events", grade=11, description="""
               This is a government and civics course, where the US government system will be covered. This will 
               require some material about the history of the government, but the majority of the class will
               emphasize current events and systems. Students will develop their critical thinking through
               analyzing current systemic issues that those who live in the US face. There will be an 
               emphasis on continuity and long-lasting effects of historical systems."""),
        Course(name="Personal Finance I", grade=11, 
               description="""Personal Finance I is meant to prepare students for 
               managing their finances in the real world. Topics covered include budgeting,
                 saving, investing, credit management, and understanding insurance. They will learn how to 
                 do their taxes, how to buy a car, how banking works, credit vs. debit, and how to plan for major life expenses like college and housing.
                 These are skills that will benefit them regardless of their future career path."""),
        Course(name="Foreign Language III", grade=11,  description=lang_description),

        #12th grade courses
        Course(name="English IV: Global Literature", grade=12, description="""This course shift focus away from 
               American and Western literature to explore literary works from diverse cultures around the world. This will also integrate
               with the the Foreign Language Course."""),
        Course(name="Statistics: Statistics in Politics", grade=12, description="""
               This course will coer the fundamentals of descriptive statistics as well inference and 
               significance testing. The application aspect of the class will be based in analyzing data
               in politics, critically thinking about how statistics are produced and discussing correlation, confounding 
               variables, and causation."""),
        Course(name="Geosystems: Science for Daily Life", grade=12, description="""
               This course provides an in-depth understanding of Earth's systems and their impact on daily life.
               Students will explore topics such as weather patterns, climate change, natural disasters,
               and resource management. The course emphasizes practical applications of geoscience concepts,
               helping students make informed decisions about environmental issues and sustainability. The skills emphasized in this 
               course include understanding weather data, interpreting climate policies, and exploring how geographical factors
               influence our daily lives."""),
        Course(name="Computer Science: Personal Branding", grade=12, description=""" 
               This courase will cover fundamental computer science priciples, coding primarily
               in Python. This course requires no prior computer programming experience, and will focus
               on application rather than theory. Specifically, we will be discussing personal branding, and 
               by the end of the course, students will have created their own personal website. This course
               is design for all students, regardless of their interest in purusing a career in computer science."""),
        Course(name="Personal Finance II", grade=12,
               description="""Personal Finance II builds upon the foundation laid in Personal Finance I,
               diving deepter into topics such as investing, starting a business, decided on a career path,
               and introductory macroeconics."""),
        Course(name="Foreign Language IV", grade=12,  description=lang_description),
    ]

    db.session.add_all(courses)
    db.session.commit()

    print("Database seeded.")
