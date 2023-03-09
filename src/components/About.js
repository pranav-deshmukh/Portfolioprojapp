import React from "react";

function About() {
  return (
    <div name="about" className="w-full bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-v-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-2xl font-bold">
            <h4>Contact- 123456789</h4>
            <h3>Email- xyz@hdfhj</h3>
            <h3>instagran- xyz#h</h3>
            {/* <a href="https://github.com/pranav-deshmukh">Github link</a> */}
          </div>
          <div className="sm:text-center">
            <p>
              I am Pranav Deshmukh. I am a first year CSE Core at VIT Vellore. I
              passes my 12th from Pune, Maharashtra. First and foremost, I am a
              passionate web developer . I have 7 months of experience in
              developing websites and web applications, working with various
              programming languages such as HTML, CSS, JavaScript, and React. I
              have had worked on a variety of projects, from simple websites to
              complex web applications that require custom functionality and
              integrations with third-party APIs. I have started to work on
              popular web development frameworks such as React. What sets me
              apart as a web developer is my ability to not only write clean and
              maintainable code but also to understand the business goals behind
              the project and work closely with the team to achieve those goals.
              I am a strong communicator and collaborator, always willing to go
              above and beyond to ensure that the project is delivered on time
              and to the highest standard. Outside of work, I am a
              self-motivated learner and enjoy staying up-to-date with the
              latest web development trends and best practices. I enjoy
              attending conferences, reading industry publications, and
              participating in online communities to continue honing my skills
              and knowledge. Overall, I believe my passion for web development
              make me a strong candidate for any web development role.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
