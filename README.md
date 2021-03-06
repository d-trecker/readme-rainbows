# Professional README Generator

Title: ReadMe Rainbows</br>
Student: Dylan Trecker</br>
Description: A Node JS powered ReadMe generator.</br>
Full Repository: https://github.com/d-trecker/readme-rainbows.git</br>
Get the repository by: $ git clone git@github.com:d-trecker/readme-rainbows.git </br>
Video Link: https://drive.google.com/file/d/1HhxCNaN4IafeKi8GlHe6L5P1Jz4wbM6x/view?usp=sharing

User Story </br>
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project


Acceptance Criteria </br>
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

-README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions when information prompts are answered. 

WHEN I enter my project title
THEN this is displayed as the title of the README

-When project title is entered it is dipslayed as the title of the README. 

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

-When description, installation instructions, usage information, contribution guidelines, and test instructions are entered, they are added to their appropriate sections of the README. 

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

-A badge is added near the top of the README that explains which license the application is covered under.

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

-When GitHub user name is entered, a link to my GitHub profile is under the questions section. 

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

-When email address is entered, this is added to the section of the README under question.

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

-When you click the links in the table of contents you are taken to the corresponding section of the README. 

</br>
</br>

Grading Requirements
This Challenge is graded based on the following criteria:

Deliverables: 20%
A sample README generated using the application must be submitted.

Your GitHub repository containing your application code.

Walkthrough Video: 27%
A walkthrough video that demonstrates the functionality of the README generator must be submitted and a link to the video should be included in your README file.

The walkthrough video must demonstrate how a user would invoke the application from the command line.

The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.

Technical Acceptance Criteria: 40%
Satisfies all of the above acceptance criteria plus the following:

Uses the Inquirer package (Links to an external site.).
Repository Quality: 13%
Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a high-quality README with description and a link to walkthrough video.

