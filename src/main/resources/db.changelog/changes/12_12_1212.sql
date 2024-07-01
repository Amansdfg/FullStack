-- Create the universities table
CREATE TABLE IF NOT EXISTS universities (
                              id SERIAL PRIMARY KEY,
                              name VARCHAR(255) NOT NULL,
                              text TEXT
);

INSERT INTO universities (name, text) VALUES
                                          ('Harvard University', 'Located in Cambridge, Massachusetts, Harvard University is a private Ivy League research university established in 1636.'),
                                          ('Stanford University', 'Stanford University, located in Stanford, California, is a private research university known for its academic strength and proximity to Silicon Valley.'),
                                          ('Massachusetts Institute of Technology', 'MIT is a private research university in Cambridge, Massachusetts, known for its strong emphasis on scientific and technological research.'),
                                          ('University of Oxford', 'The University of Oxford is a collegiate research university in Oxford, England. It is the oldest university in the English-speaking world.'),
                                          ('University of Cambridge', 'Located in Cambridge, England, the University of Cambridge is a public research university established in 1209.'),
                                          ('California Institute of Technology', 'Caltech is a private research university in Pasadena, California, known for its strength in natural sciences and engineering.'),
                                          ('Princeton University', 'Princeton University is a private Ivy League research university in Princeton, New Jersey, established in 1746.'),
                                          ('Yale University', 'Yale University, located in New Haven, Connecticut, is a private Ivy League research university established in 1701.'),
                                          ('University of Chicago', 'The University of Chicago is a private research university in Chicago, Illinois, known for its strong emphasis on research and academic rigor.'),
                                          ('Columbia University', 'Located in New York City, Columbia University is a private Ivy League research university established in 1754.'),
                                          ('University of Pennsylvania', 'The University of Pennsylvania is a private Ivy League research university in Philadelphia, Pennsylvania, established in 1740.'),
                                          ('University of California, Berkeley', 'UC Berkeley is a public research university in Berkeley, California, known for its academic excellence and activism.'),
                                          ('University of California, Los Angeles', 'UCLA is a public research university in Los Angeles, California, known for its diverse academic programs and vibrant campus life.'),
                                          ('Imperial College London', 'Imperial College London is a public research university in London, England, known for its strength in science, engineering, and medicine.'),
                                          ('University College London', 'UCL is a public research university in London, England, and is a constituent college of the University of London.'),
                                          ('University of Toronto', 'The University of Toronto is a public research university in Toronto, Ontario, Canada, known for its high academic standards and research output.'),
                                          ('University of Michigan', 'The University of Michigan is a public research university in Ann Arbor, Michigan, known for its strong academic programs and research initiatives.'),
                                          ('Johns Hopkins University', 'Johns Hopkins University is a private research university in Baltimore, Maryland, known for its medical, science, and engineering programs.'),
                                          ('Duke University', 'Duke University is a private research university in Durham, North Carolina, known for its strong academic programs and athletic teams.'),
                                          ('Northwestern University', 'Northwestern University is a private research university in Evanston, Illinois, known for its strong emphasis on research and interdisciplinary education.');
